import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootState} from '../store/store';
import {useSelector} from 'react-redux';
import HeaderSharePayment from '../components/sharepayment/HeaderSharePayment';
import CopyPaymentLink from '../components/sharepayment/CopyPaymentLink';
import {ScanBarcode, WalletAdd1, Whatsapp, Export} from 'iconsax-react-native';
import ShareOnEmail from '../components/sharepayment/ShareOnEmail';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigation';

const SharePayment = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const linkUrl = useSelector(
    (state: RootState) => state.payment.paymentData.web_url,
  );

  const viewQRCode = () => {
    navigation.navigate('QRScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <HeaderSharePayment />
      </View>
      <View style={styles.containerMethodShares}>
        <View style={styles.containerShareLink}>
          <CopyPaymentLink link={linkUrl} />
          <TouchableOpacity style={styles.buttonBarcode} onPress={viewQRCode}>
            <ScanBarcode size={20} color="#FFFFFF" variant="Bulk" />
          </TouchableOpacity>
        </View>
        <ShareOnEmail link={linkUrl} />
        <TouchableOpacity style={styles.containerShare}>
          <Whatsapp size={20} color="#035AC5" variant="Bulk" />
          <Text style={styles.text}>Enviar a número de WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerShare}>
          <Export size={20} color="#035AC5" variant="Bulk" />
          <Text style={styles.text}>Compartir con otras aplicaciones</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerNewRequest}>
        <Text style={styles.textNewRequest}>Nueva solicitud</Text>
        <WalletAdd1 size={20} color="#035AC5" variant="Bulk" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SharePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 339,
    height: 114,
    borderRadius: 12,
    backgroundColor: '#F9FAFC',
  },
  containerMethodShares: {
    marginVertical: 16,
    flexDirection: 'column',
    width: 339,
    height: 272,
    justifyContent: 'space-between',
  },
  containerNewRequest: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 339,
    height: 56,
    backgroundColor: '#F9FAFC',
    color: '#035AC5',
  },
  containerShareLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textNewRequest: {
    color: '#035AC5',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    padding: 10,
  },
  buttonBarcode: {
    backgroundColor: '#035AC5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    height: 56,
    width: 56,
  },
  containerShare: {
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
