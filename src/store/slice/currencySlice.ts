import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import fiatCurrencies from '../../constants/fiatCurrencies';

interface Currency {
  name: string;
  symbol: string;
  image: any;
  prefix: string;
  prefixPosition: string;
}

interface CurrencyState {
  currencies: Currency[];
  selectedCurrency: Currency;
}

const initialState: CurrencyState = {
  currencies: fiatCurrencies,
  selectedCurrency: fiatCurrencies[0],
};

const currenciesSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    /**
     * Establece una nueva moneda seleccionada.
     * @param {CurrencyState} state - Estado actual del slice.
     * @param {PayloadAction<string>} action - Símbolo de la moneda a seleccionar.
     */
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      const currency = state.currencies.find(c => c.symbol === action.payload);
      if (currency) {
        state.selectedCurrency = currency;
      } else {
        console.warn(`Moneda con símbolo ${action.payload} no encontrada.`);
      }
    },
  },
});

export const {setSelectedCurrency} = currenciesSlice.actions;
export default currenciesSlice.reducer;
