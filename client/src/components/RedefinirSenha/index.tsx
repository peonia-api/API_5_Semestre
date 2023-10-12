import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { BotaoEnvCodigo, BotaoRedefSenha } from "../Botao";
import User from "../../services/User";
import  Storage from 'expo-storage'

export function VerificacaoDoCodigo({ navigation }: any) {
  const [emailInserido, setEmailInserido] = useState("");
  const [codigoInserido, setCodigoInserido] = useState("");
  const [senhaInserida, setSenhaInserida] = useState("");
  const [senhaInseridaVerifica, setSenhaInseridaVerifica] = useState("");


  const handleEnviarCodigo = async () => {
    try {
    await User.getAuthEmail(emailInserido).then(() =>{
        Storage.setItem({key: 'email', value: JSON.stringify(emailInserido)})
        alert("Email enviado")
      }).catch(() => {
        alert("email incorreto!")
      })
    }catch (error) {
      alert("email incorreto!")
    }
  }
  
  const handleVerificaCodigo= async () => {
    try {
    await User.getVerificaCodigo(emailInserido, codigoInserido).then((res) =>{
          if(res != null){
            navigation.navigate('Redefinir senha')
          }else{
            alert("email ou codigo incorreto!")
          }
      })
    }catch (error) {
      alert("email ou codigo incorreto!")
    }
  }


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
              <Text style={styles.textoBotao}>Enviar Email</Text>
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
            <TouchableOpacity style={styles.BotaoVerificaCodigo} onPress={() => handleVerificaCodigo()}  >
              <Text style={styles.textoBotao}>Verificar Código</Text>
            </TouchableOpacity>
        </View>
        <View>
      </View>
    </View>

  );
}
