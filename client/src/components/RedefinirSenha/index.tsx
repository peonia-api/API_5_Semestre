import React, { useState } from "react";
import { View, Image, TextInput, StyleSheet, ScrollView } from "react-native";
import styles from "./style";
import { BotaoLogin, BotaoEnvCodigo, BotaoVerificaCodigo, BotaoRedefSenha } from "../Botao";


export default function RedefinirSenha() {
  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira o seu E-mail"
            style={styles.inputEmail}
            placeholderTextColor="#000000" // Defina a cor do placeholder
          />
        </View>
        <BotaoEnvCodigo />
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira o código"
            style={styles.inputEmail}
            maxLength={6}
          />
        </View>
        <BotaoVerificaCodigo />
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
    </View>
  </ScrollView>
  );
}
