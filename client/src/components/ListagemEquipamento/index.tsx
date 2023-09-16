import React from "react";
import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./style";
import { BotaoCadastro } from "../Botao";


export default function ListaEquipamento() {
  const data = [
    {
      id: 1,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1000",
      text2: "21212 01:02 - 12:54",
    },
    {
      id: 2,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1001",
      text2: "21213 02:03 - 13:55",
    },
    {
      id: 3,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1002",
      text2: "21214 03:04 - 14:56",
    },
    {
      id: 4,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1003",
      text2: "21215 04:05 - 15:57",
    }, {
      id: 5,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1000",
      text2: "21212 01:02 - 12:54",
    },
    {
      id: 6,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1001",
      text2: "21213 02:03 - 13:55",
    },
    {
      id: 7,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1002",
      text2: "21214 03:04 - 14:56",
    },
    {
      id: 8,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1003",
      text2: "21215 04:05 - 15:57",
    },
    {
      id: 9,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1000",
      text2: "21212 01:02 - 12:54",
    },
    {
      id: 10,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1001",
      text2: "21213 02:03 - 13:55",
    },
    {
      id: 11,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1002",
      text2: "21214 03:04 - 14:56",
    },
    {
      id: 12,
      image: require('../../assets/iconImage.png'),
      text1: "Transformador #T1003",
      text2: "21215 04:05 - 15:57",
    },
  ];


  return (
    <View>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.column}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.textfont}>{item.text1}</Text>
              <Text>{item.text2}</Text>
            </View>
          )}
        />
      </SafeAreaView>
      <View style={styles.footerBotao}>
        <BotaoCadastro />
      </View>
    </View>

  )
}

