import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreatePaymentScreen from '../screens/CreatePaymentScreen';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="CreatePayment"
      // screenOptions={{
      //   headerRight= ()=>
      //   }
      // }}
    >
      <Stack.Screen name="CreatePayment" component={CreatePaymentScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
