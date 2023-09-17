import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Cadastro from '../Cadastro';

import { useNavigation } from "@react-navigation/native";

export function BotoesDetalhes() {
  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={styles.botaoDesativar}>
        <Text style={styles.textoBotao}>DESATIVAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoAtivar}>
        <Text style={styles.textoBotao}>ATIVAR</Text>
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
