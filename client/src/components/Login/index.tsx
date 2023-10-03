import React from "react";
import { View, Image, TextInput } from "react-native";
import styles from "./style";
import { BotaoLogin } from "../Botao";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="USUÁRIO"
            style={styles.inputLogin}
            placeholderTextColor="#000000" // Defina a cor do placeholder
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="SENHA"
            style={styles.inputLogin}
            placeholderTextColor="#000000" // Defina a cor do placeholder
          />
        </View>
      </View>
      <BotaoLogin />
    </View>
  );
}
