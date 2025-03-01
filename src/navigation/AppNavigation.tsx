import React, {useEffect, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import CreatePaymentScreen from '../screens/CreatePaymentScreen';
import SharePayment from '../screens/SharePayment';
import PaymentComplete from '../screens/PaymentComplete';
import QRScreen from '../screens/QRScreen';

// Definición de tipos para las rutas
export type RootStackParamList = {
  CreatePayment: undefined;
  SharePayment: undefined;
  PaymentComplete: undefined;
  QRScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const navigationRef = useRef<any>(null);

  const isSuccess = useSelector((state: RootState) => state.websocket.success);
  useEffect(() => {
    if (isSuccess) {
      navigationRef.current?.navigate('PaymentComplete');
    }
  }, [isSuccess]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="CreatePayment"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="CreatePayment" component={CreatePaymentScreen} />
        <Stack.Screen name="SharePayment" component={SharePayment} />
        <Stack.Screen name="QRScreen" component={QRScreen} />
        <Stack.Screen name="PaymentComplete" component={PaymentComplete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
