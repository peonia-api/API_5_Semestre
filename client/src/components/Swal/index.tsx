import React from 'react';
import { StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
const AlertEquipmentt = (title: string, label: string, message: string) =>
    Alert.alert(`${title}`, `${label}`, [
      {
        text: 'NÃO',
        onPress: () => console.log(`${message}`),
        style: 'cancel',
      },
      {text: 'SIM', onPress: () => console.log(`${message}`)},
    ]
    
  );

export default AlertEquipmentt;