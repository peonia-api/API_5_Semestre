import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./style";
import User from "../../services/User";
import  Storage from 'expo-storage'
import { Button } from "../button";
import { InputPassword } from "../Input";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Redifinir({ navigation }: any) {
  const [senhaInserida, setSenhaInserida] = useState("");
  const [senhaInseridaVerifica, setSenhaInseridaVerifica] = useState("");

  const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordValid = (password: string) => {
      const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{10,20}$/;
      return passwordPattern.test(password);
  };
  
  const handleAlterarSenha = async () => {
    try {
      if (!isPasswordValid(senhaInserida)) {
        Alert.alert("Senha inválida", "A senha deve conter pelo menos uma letra maiúscula, um número, um caractere especial e ter no minímo 10 e máximo 20 dígitos.");
        setShowPasswordRequirements(true)
        return;
    }
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
        <InputPassword style={styles.inputEmail} show={showPassword} setPassword={setSenhaInserida} placeholder={"NOVA SENHA"}/>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="#000"
                style={styles.iconPassword}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputWrapper}>
        <InputPassword style={styles.inputEmail} show={showPassword} setPassword={setSenhaInseridaVerifica} placeholder={"CONFIRMAR SENHA"}/>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="#000"
                style={styles.iconPassword}
            />
        </TouchableOpacity>
      </View>
      <View style={styles.containerBotao}>
        <Button 
            styles={styles.BotaoVerificaCodigo} 
            stylesText={styles.textoBotao} 
            onPress={handleAlterarSenha} 
            texto={'Redefinir Senha'}
        />
      </View> 
      {showPasswordRequirements && (
          <View style={styles.textPassword}>
              <Text>Requisitos da senha:</Text>
              <Text>- Pelo menos 1 letra maiúscula;</Text>
              <Text>- Pelo menos 1 número;</Text>
              <Text>- Pelo menos 1 caractere especial;</Text>
              <Text>- No minímo 10 e máximo 20 dígitos</Text>
          </View>
      )}
    </View>
  );
}
