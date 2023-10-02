import React from "react";
import { View, Image, TextInput } from "react-native";
import styles from "./style";

export default function Login() {
  return (
    <View>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logo.png')} style={styles.imageSize} />
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="USUÁRIO"
            style={styles.inputLogin}
            placeholderTextColor="#999" // Defina a cor do placeholder
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="SENHA"
            style={styles.inputLogin}
            placeholderTextColor="#999" // Defina a cor do placeholder
          />
        </View>
      </View>
    </View>
  );
}
