import React, { useContext, useState } from "react";
import { View, Image, TextInput, Text } from "react-native";
import styles from "./style";
import { BotaoLogin } from "../Botao";
import { AuthContext } from "../../contexts/";
import { InputPassword, Input } from "../Input";
import LottieView from 'lottie-react-native';


function LoginScreen({ navigation }: any) {
 
    const { login } = useContext(AuthContext);
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const handleSubmit = () => {
      login(email, password)
    };

    

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <Input style={styles.inputLogin} set={setEmail} placeholder={"USUÁRIO"} />
        </View>
        <View style={styles.inputWrapper}>
          <InputPassword style={styles.inputLogin} setPassword={setPassword} placeholder={"SENHA"}/>
        </View>
      </View>
      <BotaoLogin handleSubmit={handleSubmit}  />
      <Text style={[styles.recuperarSenha, { marginTop: 35 }, {marginBottom: 28}]} onPress={() => navigation.navigate('Verificar codigo')}>
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


export default React.memo(LoginScreen)