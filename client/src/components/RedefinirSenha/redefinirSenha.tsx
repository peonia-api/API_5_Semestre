import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import User from "../../services/User";
import  Storage from 'expo-storage'
import { Button } from "../button";
import { InputPassword } from "../Input";

export function Redifinir({ navigation }: any) {
  const [senhaInserida, setSenhaInserida] = useState("");
  const [senhaInseridaVerifica, setSenhaInseridaVerifica] = useState("");


  
  const handleAlterarSenha = async () => {
    try {
      let userEmail = await Storage.getItem({ key: 'email' }) ?? "";
      userEmail = userEmail.replace(/[" ]/g, "");
      if (senhaInserida === senhaInseridaVerifica) {
        await User.patchPassword({ userEmail, userPassword: senhaInserida }).then(() => {
            alert("Senha Alterada!");
            navigation.navigate('Login')
        }).catch((error) => {
          alert("Erro ao alterar senha");
        });
      } else {
        alert("A nova senha e confirmar senha devem ser iguais!");
      }
    } catch (error) {
      alert("Email ou código incorreto!");
    }
  };




  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>

      <View style={styles.inputWrapper}>
        <InputPassword style={styles.inputEmail} setPassword={setSenhaInserida} placeholder={"NOVA SENHA"}/>
      </View>
      <View style={styles.inputWrapper}>
        <InputPassword style={styles.inputEmail} setPassword={setSenhaInseridaVerifica} placeholder={"CONFIRMAR SENHA"}/>
      </View>
      <View style={styles.containerBotao}>
        <Button 
            styles={styles.BotaoVerificaCodigo} 
            stylesText={styles.textoBotao} 
            onPress={handleAlterarSenha} 
            texto={'Redefinir Senha'}
        />
      </View> 
    </View>
  );
}
