import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";
import Pesquisa from "../Pesquisa";

export default function NavBar() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.containerCompany}>
          <Image source={require('../../assets/iconCompany.png')} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.textfont}>EMPRESA</Text>
            <Text style={styles.textfont}>Gestão de Equipamentos</Text>
          </View>
        </View>
        <View style={styles.containerPeople}>
          <Image source={require('../../assets/iconPeople.png')} style={styles.icon} />
          <Text style={styles.textfont}>Usuário</Text>
        </View>
      </View>
      <View style={styles.linhaPontilhada} />
      <Pesquisa/>
    </View>
  );
}
