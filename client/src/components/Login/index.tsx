import React, { useContext, useState } from "react";
import { View, Image, TextInput, Text } from "react-native";
import styles from "./style";
import { BotaoLogin } from "../Botao";
import { AuthContext } from "../../contexts/User";


export default function LoginScreen({ navigation }: any) {
  function Login() {
    const { login } = useContext(AuthContext);
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [EmailRecovery, setEmailRecovery] = useState("");
   
    const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log("submit", { email, password });
   
      login(email, password);
    };
    const changeInput = (e: any) => {
      e.style.backgroundColor = "#54C5CE";
    };
   
   
    let paramsEmail = {
      email: EmailRecovery,
    };


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
      <Text style={[styles.recuperarSenha, { marginTop: 35 }, {marginBottom: 28}]} onPress={() => navigation.navigate('Redefinir senha')}>
        Recuperar a senha
      </Text>
      <View>
      <Text style={styles.textoNovo}>
      Você é novo por aqui?{' '} 
        <Text style={styles.recuperarSenha} onPress={() => navigation.navigate('Cadastrar usuário')}>
          Crie sua conta
        </Text>
      </Text>
      
        
      </View>

    
    </View>
  );
}
}