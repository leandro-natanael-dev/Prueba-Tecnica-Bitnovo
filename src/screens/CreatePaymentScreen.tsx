import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CreatePaymentScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text>Crear Pago</Text>
      </View>
      {/* <View>

      </View>
      <View>

      </View> */}
    </View>
  );
};

export default CreatePaymentScreen;

const styles = StyleSheet.create({
  header: {
    marginTop:200,
  },
})