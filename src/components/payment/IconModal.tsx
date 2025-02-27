import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ArrowDown2} from 'iconsax-react-native';
import useSelectedCurrency from '../../hooks/useSelectedCurrency';

interface IconModalProps {
  modalVisible: () => void;
}

const IconModal: React.FC<IconModalProps> = ({modalVisible}) => {
  const selectedCurrency = useSelectedCurrency();

  return (
    <View style={styles.modalContainer}>
      <TouchableOpacity
        style={styles.modalContainerBottom}
        onPress={modalVisible}>
        <Text style={styles.modalCurrent}>{selectedCurrency?.symbol}</Text>
        <ArrowDown2 size={16} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default IconModal;

const styles = StyleSheet.create({
  modalContainerBottom: {
    flexDirection: 'row',
    backgroundColor: '#D3DCE64D',
    width: 70,
    height: 28,
    borderRadius: 24,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  modalCurrent: {
    fontFamily: 'Mulish-Bold',
    color: '#002859',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});
