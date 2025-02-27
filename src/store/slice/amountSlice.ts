import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AmountState {
  amount: string;
}

const initialState: AmountState = {
  amount: '',
};

/**
 * Actualiza el monto en el estado.
 * @param {AmountState} state - Estado actual del slice.
 * @param {PayloadAction<string>} action - Acción que contiene el nuevo monto.
 */

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setAmount: (state, action: PayloadAction<string>) => {
      state.amount = action.payload;
    },
  },
});

export const {setAmount} = amountSlice.actions;
export default amountSlice.reducer;
