import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Pesquisa from "../Pesquisa";
import { LinearGradient } from 'expo-linear-gradient';
import Login from "../Login";

export default function NavBar() {
  return (
    <>
   {/* {Login() ? null :  */}
   <View>
    <LinearGradient
      colors={['#3B8FA8', '#4DB9DB', '#92CFE1']}
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
      </View>
    </LinearGradient>
      {/* <View style={styles.linhaPontilhada} /> */}
  </View>
  </>
  );
}
