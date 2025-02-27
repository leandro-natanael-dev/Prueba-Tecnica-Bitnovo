import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import {ArrowLeft, SearchNormal1} from 'iconsax-react-native';
import fiatCurrencies from '../../constants/fiatCurrencies';
import CurrencyItem from './CurrencyItem';

interface CurrencyModalProps {
  closeModal: () => void;
}

const CurrencyModal: React.FC<CurrencyModalProps> = ({closeModal}) => {
  const [searchCurrency, setSearchCurrency] = useState<string>('');

  const filteredCurrencies = useMemo(() => {
    return fiatCurrencies.filter(
      currency =>
        currency.name.toLowerCase().includes(searchCurrency.toLowerCase()) ||
        currency.symbol.toLowerCase().includes(searchCurrency.toLowerCase()),
    );
  }, [searchCurrency]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.circleArrow} onPress={closeModal}>
          <ArrowLeft color="#002859" size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>Selecciona una divisa</Text>
        <View style={styles.spacer} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.searchBar}>
          <SearchNormal1 color="#647184" size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
            placeholderTextColor="#647184"
            onChangeText={setSearchCurrency}
          />
        </View>
        <View style={styles.items}>
          <FlatList
            data={filteredCurrencies}
            renderItem={({item}) => (
              <CurrencyItem
                symbol={item.symbol}
                name={item.name}
                image={item.image}
                closeModal={closeModal}
              />
            )}
            keyExtractor={item => item.symbol}
          />
        </View>
      </View>
    </View>
  );
};

export default CurrencyModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E9F2',
  },
  title: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    flex: 1,
    color: '#002859',
  },
  spacer: {
    width: 28,
  },
  circleArrow: {
    backgroundColor: '#EFF2F7',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E9F2',
    borderRadius: 6,
    width: '100%',
    height: 48,
    paddingHorizontal: 14,
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  items: {
    flex: 1,
    marginTop: 12,
  },
});
