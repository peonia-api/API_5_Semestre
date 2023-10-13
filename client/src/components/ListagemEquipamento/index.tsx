import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/equipmente";
import  CardEquipmet  from "../Card";


function ListaEquipamento({ navigation }: any) {
  const { equipmente, loaded } = useContextoEquipmente();
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
    navigation.navigate('Detalhes', { itemId });
  };


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
        <CardEquipmet filter={filteredEquipments} onPress={handleItemPress}/>
       
      </View>
    </View>
  );
}

export default React.memo(ListaEquipamento)