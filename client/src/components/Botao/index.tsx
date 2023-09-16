import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";


export function BotoesDetalhes() {
  return (
  
            <View style={styles.containerBotao}>
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
      <View>
              <View style={styles.containerBotao}>
                <View style={styles.linhaPontilhada} />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
  }
  
