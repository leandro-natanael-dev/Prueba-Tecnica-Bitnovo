import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TickCircle} from 'iconsax-react-native';
import {RootStackParamList} from '../navigation/AppNavigation';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const PaymentComplete = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleFinish = () => {
    navigation.navigate('CreatePayment');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerHeader}>
        <Image
          source={require('../assets/images/BitnovoPay.png')}
          style={styles.imageBitnovo}
        />
      </View>
      <View style={styles.containerMain}>
        <View style={styles.containerSub}>
          <TickCircle size={100} color="#22C55E" variant="Bulk" />
          <Text style={styles.title}>Pago recibido</Text>
          <Text style={styles.subTitle}>
            El pago se ha confirmado con éxito
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonFinish} onPress={handleFinish}>
          <Text style={styles.textButton}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  containerHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 56,
    shadowColor: '#28293D',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.08,
    shadowRadius: 1,
    elevation: 1,
    backgroundColor: 'white',
  },
  imageBitnovo: {
    width: 88,
    height: 32,
  },
  containerMain: {
    flex: 1,
    width: 354,
    height: 744,
    paddingTop: 32,
    paddingBottom: 44,
    paddingHorizontal: 20,
    gap: 24,
  },
  containerSub: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 314,
    height: 588,
    gap: 16,
  },
  title: {
    fontFamily: 'Mulish-Bold',
    fontSize: 20,
    lineHeight: 25,
    color: '#002859',
  },
  subTitle: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: '#647184',
  },
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
