import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, GestureResponderEvent } from "react-native";
import styles from "./style";
//import { useNavigation } from "@react-navigation/native";

import { useContextoEquipmente } from "../../hooks";

interface props {
  text: string;
  style: any;
  label: string;
  message: string;
  handle: () => void; 
}



export function BotoesDetalhes({ text, style, label, message, handle }: props) {
  const [ confirm, setConfirm ] = useState(null as any)

  //const { setConfirm, confirm } = useContextoEquipmente()

  // const handlePress = () => {
  //   AlertEquipmentt(text, label, message);
  // };

  function AlertEquipmentt(title:string, label:string, message:string) {
  
      Alert.alert(`${title}`, `${label}`, [
        {
          text: 'NÃO',
          onPress: (e) => {
            setConfirm(false)
          },
        },
        {
          text: 'SIM',
          onPress: (e) => {
             setConfirm(true)
          },
        },
      ])
  }

  if(confirm === true){
    console.log(`Equipamento ${message} com sucesso`);
    setConfirm(null)
  }
  else if(confirm === false && confirm != null){
    console.log(`Equipamento não ${message}`);
    setConfirm(null)
  }
  

  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={style} onPress={() => AlertEquipmentt(text, label, message)}>
        <Text style={styles.textoBotao}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export function BotaoAtualizar() {
  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={styles.botaoAtualizar}>
        <Text style={styles.textoBotao}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}


export function BotaoCadastro({ handle }: { handle: (event: GestureResponderEvent) => void }) {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={handle}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

