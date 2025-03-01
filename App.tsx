import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';


const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
          <AppNavigation />
      </Provider>
      <Toast />
    </SafeAreaProvider>
  );
};

export default App;
