import React from "react";
import { View, Image, TextInput, Text } from "react-native";
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
      <Text style={[styles.recuperarSenha, { marginTop: 35 }, {marginBottom: 28}]}>
        Recuperar a senha
      </Text>
      <View>
      <Text style={styles.textoNovo}>
        Você é novo por aqui?{' '} 
        <Text style={styles.recuperarSenha} onPress={() => { /* Sua função aqui */ }}>
        Crie sua conta
        </Text>
      </Text>
      
        
      </View>

    
    </View>
  );
}
