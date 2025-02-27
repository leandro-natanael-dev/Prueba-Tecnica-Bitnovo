import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const PaymentComplete = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.subContainerHeader}>
          <Image
            source={require('../assets/images/IconPaymentRequest.png')}
            style={styles.imagePaymentRequest}
          />
          <View style={styles.containerPaymentRequest}>
            <Text style={styles.textPaymentRequest}>Solicitud de pago</Text>
            <Text style={styles.paymentRequest}>56,00</Text>
          </View>
        </View>
        <Text style={styles.textSharePayment}>
          Comparte el enlace de pago con el cliente
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerNewRequest}>
        <Text style={styles.textNewRequest}>Nueva solicitud</Text>
        <Image
          style={styles.walledAdd}
          source={require('../assets/images/walledAdd.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerHeader: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
    width: 339,
    height: 114,
    borderRadius: 12,
    backgroundColor: '#F9FAFC',
  },
  subContainerHeader: {
    flexDirection: 'row',
  },
  containerPaymentRequest: {
    width: 114,
    height: 58,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPaymentRequest: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#647184',
  },
  paymentRequest: {
    fontFamily: 'Mulish-Bold',
    fontSize: 30,
    lineHeight: 38,
    color: '#002859',
  },
  imagePaymentRequest: {
    width: 58,
    height: 58,
  },
  textSharePayment: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#647184',
  },
  containerNewRequest: {
    marginTop:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 339,
    height: 56,
    backgroundColor: '#F9FAFC',
    color: '#035AC5',
  },
  walledAdd: {
    width: 20,
    height: 20,
    color: '#035AC5',
  },
  textNewRequest: {
    color: '#035AC5',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    lineHeight: 20,
  },
});
