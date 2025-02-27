import {useSelector} from 'react-redux';
import {RootState} from '../store/store';

const useSelectedCurrency = () => {
  return useSelector((state: RootState) => state.currency.selectedCurrency);
};

export default useSelectedCurrency;
