import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type PaymentState = {
  paymentData: any | null;
};

const initialState: PaymentState = {
  paymentData: null,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentData: (state, action: PayloadAction<any>) => {
      state.paymentData = action.payload;
      console.log('✅ Guardando datos del pago en Redux:', state.paymentData);
    },
  },
});

export const {setPaymentData} = paymentSlice.actions;
export default paymentSlice.reducer;
