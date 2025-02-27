import React, {SetStateAction} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {setAmount} from '../../store/slice/amountSlice';
import useSelectedCurrency from '../../hooks/useSelectedCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Dispatch} from 'react';

interface InputAmountProps {
  isAmountSet: boolean;
  setIsAmount: Dispatch<SetStateAction<boolean>>;
}

const InputAmount: React.FC<InputAmountProps> = ({
  isAmountSet,
  setIsAmount,
}) => {
  const paymentAmount = useSelector((state: RootState) => state.amount.amount);
  const selectedCurrency = useSelectedCurrency();
  const dispatch = useDispatch();

  const handleInputAmount = (input: string) => {
    const amount = parseFloat(input);
    console.log(amount);
    if (amount > 0) {
      dispatch(setAmount(input));
      setIsAmount(true);
    } else {
      dispatch(setAmount('0.00'));
      setIsAmount(false);
    }
  };

  const textStyle = [
    styles.amoutPayment,
    isAmountSet ? styles.selected : styles.unselected,
  ];

  return (
    <View style={styles.containerAmout}>
      {selectedCurrency?.prefixPosition === 'before' && (
        <Text style={textStyle}>{selectedCurrency.prefix}</Text>
      )}
      <TextInput
        style={textStyle}
        placeholder={'0.00'}
        onChangeText={handleInputAmount}
        value={paymentAmount}
        keyboardType="decimal-pad"
        selectionColor={isAmountSet ? '#035AC5' : '#C0CCDA'}
        onFocus={() => setIsAmount(true)}
      />
      {selectedCurrency?.prefixPosition === 'after' && (
        <Text style={textStyle}>{selectedCurrency.prefix}</Text>
      )}
    </View>
  );
};

export default InputAmount;

const styles = StyleSheet.create({
  containerAmout: {
    flexDirection: 'row',
  },
  amoutPayment: {
    fontFamily: 'Mulish-Bold',
    fontSize: 40,
    lineHeight: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 5,
  },
  selected: {
    color: '#035AC5',
  },
  unselected: {
    color: '#C0CCDA',
  },
});
