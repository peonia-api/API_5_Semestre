import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import {AlertEquipmentt} from "../Swal";

interface props {
  text: string;
  style: any;
  label: string;
  message: string;
}

export function BotoesDetalhes({ text, style, label, message }: props) {
  // const handlePress = () => {
  //   AlertEquipmentt(text, label, message);
  // };

  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={style} onPress={() => AlertEquipmentt(text, label, message)}>
        <Text style={styles.textoBotao}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}


export function BotaoCadastro() {

  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
