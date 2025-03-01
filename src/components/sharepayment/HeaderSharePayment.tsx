import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import InputAmount from '../payment/InputAmount';
import {MoneyTime} from 'iconsax-react-native';

const HeaderSharePayment = () => {
  return (
    <View>
      <View style={styles.subContainerHeader}>
        <MoneyTime size={58} color="#035AC5" variant="Bulk" />
        <View style={styles.containerPaymentRequest}>
          <Text style={styles.textPaymentRequest}>Solicitud de pago</Text>
          <InputAmount editable={false} styles={stylesInputAmount} />
        </View>
      </View>
      <Text style={styles.textSharePayment}>
        Comparte el enlace de pago con el cliente
      </Text>
    </View>
  );
};

export default HeaderSharePayment;

const styles = StyleSheet.create({
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
  textSharePayment: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#647184',
  },
});

const stylesInputAmount = {
  containerAmount: {
    flexDirection: 'row',
  },
  amountPayment: {
    fontFamily: 'Mulish-Bold',
    fontSize: 30,
    lineHeight: 38,
    color: '#002859',
  },
  unselected: {
    color: '#002859',
  },
};
