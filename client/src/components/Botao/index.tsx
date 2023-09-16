import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";


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
  return (
    <View style={{backgroundColor: 'white' }}>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

