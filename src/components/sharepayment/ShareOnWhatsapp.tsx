import React from 'react'
import { Touchable, View } from 'react-native'

const ShareOnWhatsapp = () => {
    const sendMessage = () => {
        const phoneNumber = '5491123456789'; // Número con código de país sin "+"
        const message = encodeURIComponent('Hola, ¿cómo estás?');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
        Linking.openURL(url).catch(err => console.error('Error abriendo WhatsApp:', err));
      };
  return (
    
  )
}

export default ShareOnWhatsapp