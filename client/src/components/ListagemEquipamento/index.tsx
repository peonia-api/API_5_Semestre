import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/equipmente";

export default function ListaEquipamento({ navigation }: any) {
  const { equipmente, loaded } = useContextoEquipmente();
  
  
  console.log(loaded);
  const [filteredEquipments, setFilteredEquipments] = useState<Props[]>(equipmente);
  const [searchValue, setSearchValue] = useState(""); 

  useEffect(() => {
    const filtered = equipmente.filter((item) =>
      item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.serial.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredEquipments(filtered);
  }, [searchValue, equipmente]);
  

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
        <Pesquisa onSearch={(text) => setSearchValue(text)} />
      </SafeAreaView>
      <View style={styles.listaContainer}>
        {loaded && (
          <View style={styles.uploadingAnimation}>
          <LottieView
              autoPlay={true}
              loop={true}
              style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
              }}
              source={require('../../assets/carregando.json')}
          />
          </View>
        )}
        <FlatList
          data={filteredEquipments}
          keyExtractor={(item) => item._id.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.column,
                { backgroundColor: item.status ? 'transparent' : 'gray' },
              ]}
              onPress={() => handleItemPress(item._id)}
            >
              <Image
                source={{ uri: item.url[0] }}
                style={[
                  styles.image,
                  { opacity: item.status ? 1 : 0.5 }, // Define a opacidade com base no status
                ]}
              />
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