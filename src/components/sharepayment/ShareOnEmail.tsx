import React from 'react';
import {Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Sms} from 'iconsax-react-native';
import Mailer from 'react-native-mail';

interface ShareOnEmailProps {
  link: string;
}

const ShareOnEmail: React.FC<ShareOnEmailProps> = ({link}) => {
  const handleSendEmail = () => {
    Mailer.mail(
      {
        subject: 'Link de pago:',
        recipients: ['destinatario@example.com'],
        body: `${link}`,
        isHTML: true,
        attachments: [],
      },
      error => {
        if (error) {
          Alert.alert('Error', 'No se pudo abrir el cliente de correo.');
        }
      },
    );
  };
  return (
    <TouchableOpacity
      style={styles.containerShareEmail}
      onPress={handleSendEmail}>
      <Sms size={20} color="#035AC5" variant="Bulk" />
      <Text style={styles.text}>Enviar por correo Electrónico</Text>
    </TouchableOpacity>
  );
};

export default ShareOnEmail;

const styles = StyleSheet.create({
  containerShareEmail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#D3DCE6',
    paddingHorizontal: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#002859',
  },
});
