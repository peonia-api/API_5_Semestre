import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { BotaoEnvCodigo, BotaoRedefSenha } from "../Botao";
import api from "../../services/User";


export function VerificacaoDoCodigo() {
  const [emailInserido, setEmailInserido] = useState("");
  const [codigoInserido, setCodigoInserido] = useState("");

  const handleEnviarCodigo = async () => {
    try {
      const response = await api.getAuthEmail(emailInserido);
      console.log(response);


    } catch (error) {
      alert("email incorreto!")
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>
      
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Insira o seu E-mail"
            style={styles.inputEmail}
            placeholderTextColor="#000000"
            onChangeText={(e) => setEmailInserido(e)}
          />
        </View>
        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.BotaoVerificaCodigo} onPress={() => handleEnviarCodigo()} >
              <Text style={styles.textoBotao}>Verificar Email</Text>
            </TouchableOpacity>
        </View>
          
        <View style={styles.inputCodigoVerifica}>
          <TextInput
            placeholder="Insira o código"
            style={styles.inputCodigo}
            maxLength={6}
            onChangeText={(e) => setCodigoInserido(e)}
          />
        </View>

        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.BotaoVerificaCodigo} onPress={() => handleEnviarCodigo()} >
              <Text style={styles.textoBotao}>Verificar Código</Text>
            </TouchableOpacity>
        </View>
        <View>

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
