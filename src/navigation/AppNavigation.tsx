import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePaymentScreen from '../screens/CreatePaymentScreen';
import PaymentComplete from '../screens/PaymentComplete';

export type RootStackParamList = {
  CreatePayment: undefined,
  PaymentComplete: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreatePayment"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="CreatePayment" component={CreatePaymentScreen} />
      <Stack.Screen name="PaymentComplete" component={PaymentComplete} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
