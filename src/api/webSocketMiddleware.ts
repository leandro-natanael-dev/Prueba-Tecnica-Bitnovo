import {Middleware} from '@reduxjs/toolkit';
import {setConnected, setData, setSuccess} from '../store/slice/websocketSlice';

let socket: WebSocket | null = null;

const webSocketMiddleware: Middleware = store => next => action => {
  if (action.type === 'websocket/connect') {
    console.log('websocket', action.payload);
    const wsId = action.payload.identifier;

    socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/merchant/${wsId}`);
    socket.onopen = () => {
      store.dispatch(setConnected(true));
      console.log('WebSocket Connected', wsId);
    };
    socket.onmessage = event => {
      const message = JSON.parse(event.data);
      store.dispatch(setData(message));

      if (message.status === 'success') {
        store.dispatch(setSuccess(true));
        console.log('Respuesta exitosa recibida');
      } else {
        store.dispatch(setSuccess(false));
      }
      console.log('Mensaje recibido', message);
    };

    socket.onerror = error => {
      console.error('❌ WebSocket Error:', error);
    };
    socket.onclose = () => {
      store.dispatch(setConnected(false));
      console.log('🔴 WebSocket desconectado');
      socket = null;
    };
  }
  if (action.type === 'websocket/disconnect') {
    if (socket) {
      socket.close();
      socket = null;
    }
  }
  return next(action);
};

export default webSocketMiddleware;
