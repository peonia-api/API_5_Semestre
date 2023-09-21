import React from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks'
import { Equipmente } from '../../services'
import Pesquisa from "../Pesquisa";
import { listBuckets } from '../../supabase/upload'

export default function ListaEquipamento({ navigation }: any) {
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

  const { equipmente } = useContextoEquipmente()
  // console.log(equipmente[0]._id);
  const handleItemPress = (itemId: any) => {
    // Navegue para a tela de detalhes, passando o ID como parâmetro
    navigation.navigate('Detalhes', { itemId });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  }

  listBuckets()
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Pesquisa />
      </SafeAreaView>
      <View style={styles.listaContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.column} onPress={() => handleItemPress(item.id)}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.textfont}>{item.text1}</Text>
              <Text>{item.text2}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.footerBotao}>
        <View style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
            <Text style={styles.textoBotao}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

