import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import AlertEquipmentt from "../Swal";



export function BotoesDetalhes(text: string, style: any, label: string, message: string) {
  const handlePress = () => {
    AlertEquipmentt(text, label, message); 
  };

  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={style} onPress={handlePress}>
        <Text style={styles.textoBotao}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}


export function BotaoCadastro() {
  const navigation = useNavigation(); 

  const handleCadastrarPress = () => {
    // navigation.navigate("Cadastro"); 
  };

  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={handleCadastrarPress}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
