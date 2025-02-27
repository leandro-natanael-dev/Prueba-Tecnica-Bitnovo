import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {useDispatch} from 'react-redux';
import { setSelectedCurrency } from '../../store/slice/currencySlice';
import {ArrowRight2, TickCircle} from 'iconsax-react-native';
import useSelectedCurrency from '../../hooks/useSelectedCurrency';

interface CurrencyItemProps {
  symbol: string;
  name: string;
  image: ImageSourcePropType;
  closeModal: () => void;
}

const CurrencyItem: React.FC<CurrencyItemProps> = ({
  symbol,
  name,
  image,
  closeModal,
}) => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelectedCurrency();

  const handleItem = () => {
    dispatch(setSelectedCurrency(symbol));
    closeModal();
  };

  console.log(selectedCurrency);
  return (
    <TouchableOpacity style={styles.container} onPress={handleItem}>
      <View style={styles.imageTextContainer}>
        <View>
          <Image source={image} style={styles.image} />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.symbol}>{symbol}</Text>
        </View>
      </View>
      <View>
        {selectedCurrency?.symbol === symbol ? (
          <TickCircle size={16} color="#647184" />
        ) : (
          <ArrowRight2 size={16} color="#647184" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CurrencyItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    width: 339,
    height: 52,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  imageTextContainer: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Mulish-Bold',

    fontSize: 14,
    lineHeight: 20,
  },
  symbol: {
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    lineHeight: 16,
  },
});
