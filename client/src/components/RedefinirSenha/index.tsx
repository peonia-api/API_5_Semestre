import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { BotaoEnvCodigo, BotaoRedefSenha } from "../Botao";
import User from "../../services/User";


export function VerificacaoDoCodigo() {
  const [emailInserido, setEmailInserido] = useState("");
  const [codigoInserido, setCodigoInserido] = useState("");
  const [senhaInserida, setSenhaInserida] = useState("");
  const [senhaInseridaVerifica, setSenhaInseridaVerifica] = useState("");


  const handleEnviarCodigo = async () => {
    try {
    await User.getAuthEmail(emailInserido).then(() =>{
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
            alert("fooiiiii!")
          }else{
            alert("email ou codigo incorreto!")
          }
      })
    }catch (error) {
      alert("email ou codigo incorreto!")
    }
  }
  // const handleAlterarSenha = async () => {
  //   try {
  //     if(senhaInserida === senhaInseridaVerifica){
  //       await User.putPassword({ userPassword: senhaInserida });

  //     }else{
  //       alert("Senha incorreta!")
  //     }

  //   } catch (error) {
  //     alert("email incorreto!")
  //   }
  // };


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


      {/* <View style={styles.inputWrapper}>
        <TextInput
          placeholder="NOVA SENHA"
          style={styles.inputEmail}
          placeholderTextColor="#000000"
          onChangeText={(e) => setSenhaInserida(e)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="CONFIRMAR SENHA"
          style={styles.inputEmail}
          placeholderTextColor="#000000"
          onChangeText={(e) => setSenhaInseridaVerifica(e)}
        />
      </View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.BotaoVerificaCodigo} onPress={() => handleAlterarSenha()} >
          <Text style={styles.textoBotao}>Confirmar Email</Text>
        </TouchableOpacity>
      </View> */}
    </View>

  );
}

// export function RedefinirSenha() {
//   return (
//     <View>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           placeholder="NOVA SENHA"
//           style={styles.inputEmail}
//           placeholderTextColor="#000000"
//         />
//       </View>
//       <View style={styles.inputWrapper}>
//         <TextInput
//           placeholder="CONFIRMAR SENHA"
//           style={styles.inputEmail}
//           placeholderTextColor="#000000"
//         />
//       </View>
//       <View style={styles.containerBotao}>
//         <TouchableOpacity style={styles.BotaoVerificaCodigo} onPress={() => handleEnviarCodigo()} >
//           <Text style={styles.textoBotao}>Cnfirmar Email</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }
