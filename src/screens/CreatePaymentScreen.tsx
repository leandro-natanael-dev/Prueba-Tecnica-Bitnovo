import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigation';
import CurrencyModal from '../components/payment/CurrencyModal';
import InputAmount from '../components/payment/InputAmount';
import ConceptInput from '../components/payment/ConceptInput';
import IconModal from '../components/payment/IconModal';
import paymentService from '../api/paymentService';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import useSelectedCurrency from '../hooks/useSelectedCurrency';
/**
 * Pantalla para crear un pago
 * Permite ingresar un monto, seleccionar moneda y añadir un concepto.
 *
 * @returns {React.FC} Para la creacion de un pago
 *
 */

const CreatePaymentScreen = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isAmountSet, setIsAmount] = useState<boolean>(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const selectFiat = useSelectedCurrency();
  const selectConcept = useSelector(
    (state: RootState) => state.concept.concept,
  );
  const selectAmount = useSelector((state: RootState) => state.amount.amount);
  const toggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  const handleButtonPayment = async () => {
    try {
      await paymentService(selectAmount, selectConcept, selectFiat);
    } catch (error) {
      console.error(error);
    } finally {
      navigation.navigate('PaymentComplete');
    }
  };

  const contButtonDisable = [
    styles.containerButton,
    isAmountSet ? {backgroundColor: '#035AC5'} : {backgroundColor: '#71B0FD'},
  ];
  const textButtonDisable = [
    styles.textButton,
    isAmountSet ? {color: '#71B0FD'} : {color: '#FFFFFF'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.spacer} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Crear pago</Text>
        </View>
        <IconModal modalVisible={toggleModal} />
      </View>
      <View style={styles.content}>
        <View style={styles.amountContainer}>
          <InputAmount isAmountSet={isAmountSet} setIsAmount={setIsAmount} />
        </View>
        <View style={styles.containerConcept}>
          <ConceptInput />
        </View>
        <TouchableOpacity
          style={contButtonDisable}
          disabled={!isAmountSet}
          onPress={handleButtonPayment}>
          <Text style={textButtonDisable}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <CurrencyModal closeModal={toggleModal} />
      </Modal>
    </View>
  );
};

export default CreatePaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  spacer: {
    flex: 1,
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Mulish-Bold',
    color: '#002859',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  containerConcept: {
    width: '90%',
    marginTop: 20,
  },
  amountContainer: {
    width: '90%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    width: '90%',
    height: 56,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textButton: {
    fontFamily: 'Mulish-SemiBold',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
