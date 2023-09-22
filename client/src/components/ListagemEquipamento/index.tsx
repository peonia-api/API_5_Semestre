import React from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks';
import Pesquisa from "../Pesquisa";

export default function ListaEquipamento({ navigation }: any) {
  const { equipmente } = useContextoEquipmente();

  const handleItemPress = (itemId: string) => {
    // Navegue para a tela de detalhes, passando o ID como parâmetro
    navigation.navigate('Detalhes', { itemId });
  };

  const handleCadastro = () => {
    navigation.navigate('Cadastro');
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Pesquisa />
      </SafeAreaView>
      <View style={styles.listaContainer}>
        <FlatList
          data={equipmente}
          keyExtractor={(item) => item._id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.column} onPress={() => handleItemPress(item._id)}>
              <Image source={{ uri: item.url[0] }} style={styles.image} />
              <Text style={styles.textfont}>{item.type}</Text>
              <Text>{item.serial}</Text>
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