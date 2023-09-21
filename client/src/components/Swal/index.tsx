import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import { useContextoEquipmente } from '../../hooks';

export default function AlertEquipmentt(title: string, label: string, message: string): void {
  const { setConfirm } = useContextoEquipmente();

  return (
    Alert.alert(`${title}`, `${label}`, [
      {
        text: 'NÃO',
        onPress: () => {
          console.log(`Equipamento não ${message}`);
          setConfirm(false);
        },
      },
      {
        text: 'SIM',
        onPress: () => {
          console.log(`Equipamento ${message} com sucesso`);
          setConfirm(true);
        },
      },
    ])
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});


