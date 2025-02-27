import {configureStore} from '@reduxjs/toolkit';
import currencyReducer from './slice/currencySlice';
import amountReducer from './slice/amountSlice';
import conceptReducer from './slice/conceptSlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    amount: amountReducer,
    concept: conceptReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
