import React, { useContext, useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { BotaoLogin } from "../Botao";
import { AuthContext } from "../../contexts/";
import { Input } from "../Input"; // Remova o import do InputPassword
import LottieView from 'lottie-react-native';

import Icon from "react-native-vector-icons/FontAwesome";

function LoginScreen({ navigation }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login(email.replace(/ /g, ''), password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require('../../assets/logoComFundo.jpg')} style={styles.imageSize} />
      </View>
      <View>
        <View style={styles.inputWrapper}>
          <Input style={[styles.inputLogin]}
            set={setEmail}
            placeholder={"Usuário"}
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            autoCapitalize="none"
            style={[styles.inputLogin]}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            placeholder={"Senha"}
            placeholderTextColor="black"
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? 'eye' : 'eye-slash'}
              size={20}
              color="#333"
            />
          </TouchableOpacity>
        </View>
      </View>
      <BotaoLogin handleSubmit={handleSubmit} />
      <Text style={[styles.recuperarSenha, { marginTop: 35 }, { marginBottom: 28 }]} onPress={() => navigation.navigate('Verificar codigo')}>
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