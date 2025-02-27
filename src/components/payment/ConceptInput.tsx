import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {setConcept} from '../../store/slice/conceptSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const ConceptInput = () => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectConcept = useSelector(
    (state: RootState) => state.concept.concept,
  );

  const handleChangeText = (text: string) => dispatch(setConcept(text));

  const renderCharacterCounter = () => {
    if (showCounter) {
      return (
        <Text style={styles.textConsept}>
          {selectConcept.length}/140 caracteres
        </Text>
      );
    }
    return null;
  };

  return (
    <View>
      <Text style={styles.titleConsept}>Consepto</Text>
      <TextInput
        style={styles.inputConsept}
        placeholder="Añade descripción del pago"
        onFocus={() => setShowCounter(true)}
        onBlur={() => setShowCounter(false)}
        onChangeText={handleChangeText}
        value={selectConcept}
        numberOfLines={4}
        maxLength={140}
        multiline
      />
      <View style={styles.containerTextConsept}>
        {renderCharacterCounter()}
      </View>
    </View>
  );
};

export default ConceptInput;

const styles = StyleSheet.create({
  titleConsept: {
    fontFamily: 'Mulish-Bold',
    fontSize: 14,
    lineHeight: 20,
    color: '#002859',
  },
  inputConsept: {
    fontFamily: 'Mulish-Regular',
    fontSize: 14,
    letterSpacing: 0.14,
    lineHeight: 20,
    width: '100%',
    borderRadius: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E9F2',
    color: '#002859',
    marginTop: 10,
  },
  containerTextConsept: {
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  textConsept: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
    color: '#647184',
  },
});
