

const paymentService = async (
  selectFiat: any,
  selectConcept: string,
  selectAmount: number,
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
    console.log(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default paymentService;
