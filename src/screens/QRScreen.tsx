import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import {InfoCircle, ArrowLeft} from 'iconsax-react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigation';
import InputAmount from '../components/payment/InputAmount';

const QRScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const linkUrl = useSelector(
    (state: RootState) => state.payment.paymentData.web_url,
  );

  const backToSharePayment = () => {
    navigation.navigate('SharePayment');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.cicleArrow}
          onPress={backToSharePayment}>
          <ArrowLeft size={20} color="#002859" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerBody}>
        <View style={styles.containerTextScan}>
          <View style={styles.subContainerTextScan}>
            <InfoCircle size={20} color="#035AC5" variant="Bulk" />
            <Text style={styles.textScan}>
              Escanea el QR y serás redirigido a la pasarela de pago de Bitnovo
              Pay.
            </Text>
          </View>
        </View>

        <View style={styles.backgroundQr}>
          <QRCode value={linkUrl || 'https://defaulturl.com'} size={300} />
        </View>
        <InputAmount editable={false} styles={stylesInputAmount} />
        <Text style={styles.textBotton}>
          Esta pantalla se actualizará automáticamente.
        </Text>
      </View>
    </View>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#035AC5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    height: 56,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cicleArrow: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 24,
    backgroundColor: '#EFF2F7',
    marginLeft: 18,
  },
  containerBody: {
    alignItems: 'center',
  },
  containerTextScan: {
    backgroundColor: '#EAF3FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 60,
    borderRadius: 6,
    marginVertical: 25,
    paddingHorizontal: 16,
  },
  subContainerTextScan: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textScan: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#002859',
    marginLeft: 10,
  },
  backgroundQr: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 324,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBotton: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#FFFFFF',
  },
});

const stylesInputAmount = {
  containerAmount: {
    flexDirection: 'row',
  },
  amountPayment: {
    fontFamily: 'Mulish-Bold',
    fontSize: 26,
    lineHeight: 40.56,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 5,
  },
  unselected: {
    color: '#FFFFFF',
  },
};
