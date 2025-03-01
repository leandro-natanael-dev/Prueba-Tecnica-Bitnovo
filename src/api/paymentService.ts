import {Dispatch} from '@reduxjs/toolkit';
import {setPaymentData} from '../store/slice/paymentSlice';

const paymentService = async (
  selectAmount: number,
  selectConcept: string,
  selectFiat: string,
  dispatch: Dispatch,
) => {
  try {
    const formData = new FormData();
    formData.append('expected_output_amount', selectAmount);
    formData.append('reference', selectConcept);
    formData.append('fiat', selectFiat);
    const response = await fetch(
      'https://payments.pre-bnvo.com/api/v1/orders/',
      {
        method: 'POST',
        headers: {
          'X-Device-Id': 'd497719b-905f-4a41-8dbe-cf124c442f42',
        },
        body: formData,
      },
    );
    const data = await response.json();

    if (data) {
      dispatch({type: 'websocket/connect', payload: data});
      dispatch(setPaymentData(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export default paymentService;
