import React from 'react';
import {View, StyleSheet, Button, Alert} from 'react-native';

const Warning = (type: boolean) => {
  const alertActivateEquipmentt = () =>
    Alert.alert('ATIVAR', 'ATIVAR EQUIPAMENTO?', [
      {
        text: 'NÃO',
        onPress: () => console.log('A ativação do equipamento foi cancelada'),
        style: 'cancel',
      },
      {text: 'SIM', onPress: () => console.log('Equipamento ativado')},
    ]);

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={alertActivateEquipmentt} />
    </View>
  );
  const alertDisableEquipmentt = () =>
    Alert.alert('DESATIVAR', 'DESATIVAR EQUIPAMENTO?', [
      {
        text: 'NÃO',
        onPress: () => console.log('A desativação do equipamento foi cancelada'),
        style: 'cancel',
      },
      {text: 'SIM', onPress: () => console.log('Desativação concluída')},
    ]);

  return (
    <View style={styles.container}>
      <Button title={'2-Button Alert'} onPress={alertActivateEquipmentt} />
      <Button title={'2-Button Alert'} onPress={alertDisableEquipmentt} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Warning;