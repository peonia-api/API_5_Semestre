import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert, GestureResponderEvent } from "react-native";
import styles from "./style";
//import { useNavigation } from "@react-navigation/native";

import { useContextoEquipmente } from "../../hooks";

interface props {
  text: string;
  style: any;
  label: string;
  id: string
  status: any
}



export function BotoesDetalhes({ text, style, label, id, status }: props) {
  const [ confirm, setConfirm ] = useState(null as any)
  const { patchStatus, setLoaded } = useContextoEquipmente()

  //const { setConfirm, confirm } = useContextoEquipmente()

  // const handlePress = () => {
  //   AlertEquipmentt(text, label, message);
  // };

  function AlertEquipmentt(title:string, label:string) {
  
      Alert.alert(`${title}`, `${label}`, [
        {
          text: 'NÃO',
          onPress: (e) => {
            setConfirm(false)
          },
        },
        {
          text: 'SIM',
          onPress: (e) => {
             setConfirm(true)
          },
        },
      ])
  }


  async function patch (id:string) {
    if(status === true){
      await patchStatus(id, {status: false})
    }else{
      await patchStatus(id, {status: true})
    }

  } 


  if(confirm === true){
    patch(id)
    //console.log(`Equipamento ${message} com sucesso`);
    setConfirm(null)
  }
  else if(confirm === false && confirm != null){
    //console.log(`Equipamento não ${message}`);
    setConfirm(null)
  }
  

  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={style} onPress={() => AlertEquipmentt(text, label)}>
        <Text style={styles.textoBotao}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}



export function BotaoAtualizar({ handle }: { handle: (event: GestureResponderEvent) => void }) {
  return (
    <View style={styles.containerBotao2}>
      <TouchableOpacity style={styles.botaoAtualizar} onPress={handle}>
        <Text style={styles.textoBotao}>Atualizar</Text>
      </TouchableOpacity>
    </View>
  );
}


export function BotaoCadastro({ handle }: { handle: (event: GestureResponderEvent) => void }) {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoCadastro} onPress={handle}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function BotaoLogin(props: { handleSubmit: () => void }) {
  return(
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoLogin} onPress={props.handleSubmit} >
          <Text style={styles.textoBotao}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
  
}

export function BotaoCadastroUsuario({ handle }: { handle: (event: GestureResponderEvent) => void }) {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoCadastroUsuario} onPress={handle}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function BotaoAtualizarUsuario() {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoAtualizarUsuario}>
          <Text style={styles.textoBotao}>Atualizar dados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export function BotaoEnvCodigo() {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.BotaoEnvCodigo}>
          <Text style={styles.textoBotao}>ENVIAR CÓDIGO aaaaaaaaa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export function BotaoRedefSenha() {
  return (
    <View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.BotaoRedefSenha}>
          <Text style={styles.textoBotao}>ALTERAR SENHA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export function BotaoLogout(props: { handleSubmit: () => void }) {
//   return(
//     <View>
//       <View style={styles.containerBotao}>
//         <TouchableOpacity style={styles.botaoLogin} onPress={props.handleSubmit} >
//           <Text style={styles.textoBotao}>Logout</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
  
// }