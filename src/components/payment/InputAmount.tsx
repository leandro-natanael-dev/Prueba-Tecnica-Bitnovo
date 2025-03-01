import React, {SetStateAction, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import {setAmount} from '../../store/slice/amountSlice';
import useSelectedCurrency from '../../hooks/useSelectedCurrency';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Dispatch} from 'react';

interface InputAmountProps {
  isAmountSet?: boolean;
  editable: boolean;
  setIsAmount?: Dispatch<SetStateAction<boolean>>;
  styles: any;
}

const InputAmount: React.FC<InputAmountProps> = ({
  isAmountSet,
  setIsAmount,
  editable,
  styles,
}) => {
  const paymentAmount = useSelector((state: RootState) => state.amount.amount);
  const selectedCurrency = useSelectedCurrency();
  const dispatch = useDispatch();
  const [rawValue, setRawValue] = useState(
    paymentAmount ? Math.round(parseFloat(paymentAmount) * 100).toString() : '',
  );

  const handleInputAmount = (text: string) => {
    const numericValue = text.replace(/\D/g, '');
    if (numericValue.length > 9) return;

    setRawValue(numericValue);
    const formattedValue = parseInt(numericValue, 10) / 100 || 0;
    dispatch(setAmount(formattedValue.toFixed(2)));
    setIsAmount(formattedValue > 0);
  };
  const formattedDisplay = (parseInt(rawValue, 10) / 100 || 0).toFixed(2);

  const selectEdition = () => {
    if (editable) {
      return (
        <TextInput
          style={textStyle}
          placeholder={'0.00'}
          onChangeText={handleInputAmount}
          value={formattedDisplay}
          keyboardType="numeric"
          selectionColor={isAmountSet ? '#035AC5' : '#C0CCDA'}
          onFocus={() => setIsAmount(true)}
        />
      );
    } else {
      return <Text style={textStyle}>{formattedDisplay}</Text>;
    }
  };

  const textStyle = [
    styles.amountPayment,
    isAmountSet ? styles.selected : styles.unselected,
  ];

  return (
    <View style={styles.containerAmount}>
      {selectedCurrency?.prefixPosition === 'before' && (
        <Text style={textStyle}>{selectedCurrency.prefix}</Text>
      )}
      {selectEdition()}
      {selectedCurrency?.prefixPosition === 'after' && (
        <Text style={textStyle}>{selectedCurrency.prefix}</Text>
      )}
    </View>
  );
};

export default InputAmount;

const styles = StyleSheet.create({styles});
