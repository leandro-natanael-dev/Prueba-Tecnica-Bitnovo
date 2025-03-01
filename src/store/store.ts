import {configureStore} from '@reduxjs/toolkit';
import currencyReducer from './slice/currencySlice';
import amountReducer from './slice/amountSlice';
import conceptReducer from './slice/conceptSlice';
import paymentReducer from './slice/paymentSlice';
import websocketReducer from './slice/websocketSlice';
import webSocketMiddleware from '../api/webSocketMiddleware';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    amount: amountReducer,
    concept: conceptReducer,
    payment: paymentReducer,
    websocket: websocketReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(webSocketMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
