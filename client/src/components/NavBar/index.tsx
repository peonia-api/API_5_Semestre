import React, { useContext, useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoon, faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from "../../contexts";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Feather } from '@expo/vector-icons'
import { useContextUser } from "../../hooks";

Icon.loadFont();


function NavBar({ navigation }: any) {
  const element = <FontAwesomeIcon icon={faUser} />;
  const { authenticated, logout, typeCor, toggleDarkMode  } = useContext(AuthContext);

  const { typeCorMoon, setTypeCorMoon } = useContextUser()
  
  const [confirm, setConfirm] = useState(false)

  function alertSair() {

    Alert.alert("Sair", `Você deseja sair?`, [
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
          logout()
        },
      },
    ])
  }



  return (
    <>
      {authenticated ? <View>
        <LinearGradient
          colors={[typeCor[0], typeCor[1]]}
          style={styles.gradient}
        >
          <View style={styles.container}>
            <View style={styles.containerCompany}>
              <Image source={require('../../assets/iconCompany.png')} style={styles.icon} />
              <View style={styles.textContainer}>
                <Text style={styles.textfont}>EMPRESA</Text>
                <Text style={styles.textfont}>Gestão de Equipamentos</Text>
              </View>
            </View>
     
            <View style={styles.containerIcons}>
              <View  style={styles.containerIcon}>
                <TouchableOpacity  onPress={() => toggleDarkMode()} >
                  <Feather name="moon" size={29} color="black"  style={styles.testecon}/>
                 <Text style={styles.testecon}>Escuro</Text>
               </TouchableOpacity>
              </View>
              <View   style={styles.containerIcon}>
                <TouchableOpacity onPress={() => alertSair()}  >
                  <Image source={require('../../assets/sign-out.png')} style={styles.iconSignOut} />
                  <Text>Sair</Text>
                </TouchableOpacity>
              </View>
            </View>


          </View>
        </LinearGradient>
      </View> : null}

    </>
  );
}

export default React.memo(NavBar);