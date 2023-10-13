import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./style";
import User from "../../services/User";
import  Storage from 'expo-storage'
import { Button } from "../button";

export function VerificacaoDoCodigo({ navigation }: any) {
  const [emailInserido, setEmailInserido] = useState("");
  const [codigoInserido, setCodigoInserido] = useState("");




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
  
  const handleVerificaCodigo = async () => {
    try {
      await User.getVerificaCodigo(emailInserido, codigoInserido).then((res) =>{
            if(res != null){
              alert("Foiii")
              navigation.navigate('Redefinir')
            }else{
              alert("email ou codigo incorreto!")

            }
        })
    }catch (error) {
      Alert.alert("Erro","Email ou codigo incorreto!")
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
          <Button 
            styles={styles.BotaoVerificaCodigo} 
            stylesText={styles.textoBotao} 
            onPress={handleEnviarCodigo} 
            texto={'Enviar Email'}
          />
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
          <Button 
            styles={styles.BotaoVerificaCodigo} 
            stylesText={styles.textoBotao} 
            onPress={handleVerificaCodigo} 
            texto={'Verificar Código'}
          />
        </View>
        <View>
      </View>
    </View>

  );
}
