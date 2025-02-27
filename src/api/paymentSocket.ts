const WS_URL = 'https://payments.pre-bnvo.com/api/v1/orders/';

const createPaymentSocket = (onPayment: (data: any) => void) => {
  const ws = new WebSocket(WS_URL);

  ws.onopen = () => console.log('WebSocket conectado');
  ws.onerror = error => console.error('Error en webSocket', error);
  ws.onmessage = event => {
    const data = JSON.parse(event.data);
    onPayment(data);
  };
  ws.onclose = () => console.log('WebSocket cerrado');
};

export default createPaymentSocket;
