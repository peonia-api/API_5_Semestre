import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet, ScrollView } from "react-native";
import styles from "./style";
import { BotaoLogin, BotaoEnvCodigo, BotaoVerificaCodigo, BotaoRedefSenha } from "../Botao";
  
export function VerificacaoDoCodigo() {
  const [emailInserido, setEmailInserido] = useState("");
  console.log(emailInserido);
  const [codigoInserido, setCodigoInserido] = useState("");
  console.log(codigoInserido);

  const codigoGeradoPeloServidor = "codigoGeradoPeloServidor"; // Substitua com o código gerado pelo servidor

  const handleVerificarCodigo = () => {
    if (codigoInserido === codigoGeradoPeloServidor) {
      RedefinirSenha();
    } else {
      alert("Código incorreto");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira o seu E-mail"
            style={styles.inputEmail}
            placeholderTextColor="#000000" // Defina a cor do placeholder
            value={emailInserido}
            onChangeText={(text) => setEmailInserido(text)}
          />
        </View>
        <BotaoEnvCodigo />
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira o código"
            style={styles.inputCodigo}
            maxLength={6}
            value={codigoInserido}
            onChangeText={(text) => setCodigoInserido(text)}
          />
        </View>
        <BotaoVerificaCodigo /> 
      </View>
    </View>
  );
}

export function RedefinirSenha() {
  return (
  <View>
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="NOVA SENHA"
        style={styles.inputEmail}
        placeholderTextColor="#000000" // Defina a cor do placeholder
      />
    </View>
  <View style={styles.inputWrapper}>
    <TextInput
      placeholder="CONFIRMAR SENHA"
      style={styles.inputEmail}
      placeholderTextColor="#000000" // Defina a cor do placeholder
    />
  </View>
  <BotaoRedefSenha />
</View>
  );
}
