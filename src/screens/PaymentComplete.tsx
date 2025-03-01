import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
const PaymentComplete = () => {
  return (
    <View>
      <TouchableOpacity style={styles.buttonFinish}>
        <Text style={styles.textButton}>Finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  buttonFinish: {
    width: 320,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D3DCE6',
    backgroundColor: '#F9FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    color: '#035AC5',
  },
});
