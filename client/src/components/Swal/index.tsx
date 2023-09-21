import React, { useState } from 'react';
import { StyleSheet, Alert, View, Modal, Text, TouchableOpacity } from 'react-native';
import { useContextoEquipmente } from '../../hooks';

export function AlertEquipmentt(title:string, label:string, message:string) {
  const { setConfirm } = useContextoEquipmente()

  return (
    Alert.alert(`${title}`, `${label}`, [
      {
        text: 'NÃO',
        onPress: (e) => {
          console.log(`Equipamento não ${message}`);
          setConfirm(false)
        },
      },
      {
        text: 'SIM',
        onPress: (e) => {
          console.log(`Equipamento ${message} com sucesso`);
           setConfirm(true)
        },
      },
    ])

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});


