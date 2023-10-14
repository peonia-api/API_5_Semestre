import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./style";
import User from "../../services/User";
import  Storage from 'expo-storage'
import { Button } from "../button";

export function VerificacaoDoCodigo({ navigation }: any) {
  const [emailInserido, setEmailInserido] = useState("");
  const [codigoInserido, setCodigoInserido] = useState("");
  const [desc, setDesc] = useState('Enviar Código')


  const exist = async () => {
    const exite = await User.getOneEmail(emailInserido)
    exite.Existe ? handleEnviarCodigo() : Alert.alert("Erro", "Digite um email existente no app.")
  }

  const handleEnviarCodigo = async () => {
    try {
      await User.getAuthEmail(emailInserido).then(() =>{
        Storage.setItem({key: 'email', value: JSON.stringify(emailInserido)})
        alert("Email enviado")
        setDesc('Reenviar Código')
      }).catch(() => {
        console.log("oi");
        
        alert("Email incorreto!")
      })
    }catch (error) {   
      console.log('error');
      
      alert("Email incorreto!")
    }
  }
  
  const handleVerificaCodigo = async () => {
    try {
      await User.getVerificaCodigo(emailInserido, codigoInserido).then((res) =>{
            if(res != null){
              alert("Digite a nova senha!")
              navigation.navigate('Redefinir')
            }else{
              alert("Email ou código incorreto!")

            }
        })
    }catch (error) {
      Alert.alert("Erro","Código incorreto!")
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
            onPress={exist} 
            texto={desc}
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
