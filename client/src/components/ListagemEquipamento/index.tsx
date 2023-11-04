import React, { useEffect, useState } from "react";
import { View, Pressable } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/equipmente";
import CardEquipmet from "../Card";
import Filtro from "../Filtro";
import { useTheme } from '../../hooks'

function ListaEquipamento({ navigation }: any) {
  const { equipmente, loaded } = useContextoEquipmente();
  const [filteredEquipments, setFilteredEquipments] = useState<Props[]>(equipmente);
  const [searchValue, setSearchValue] = useState("");

  const [showActive, setShowActive] = useState<boolean | null>(null); // Inicialize com null
  const theme = useTheme();

  useEffect(() => {
    const filtered = equipmente.filter((item) => {
      const isActiveFilter = showActive === null ? true : (showActive ? item.status : !item.status);
      return (
        isActiveFilter &&
        (item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.serial.toLowerCase().includes(searchValue.toLowerCase()))
      );
    });
    setFilteredEquipments(filtered);
  }, [searchValue, showActive, equipmente]);

  const handleItemPress = (itemId: string) => {
    navigation.navigate('Detalhes', { itemId });
  };

  const handleFilterToggle = (isActive: boolean | null) => {
    setShowActive(isActive);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.searchFilterContainer}>
        <Pesquisa onSearch={(text) => setSearchValue(text)} customStyle={styles.searchInFilter} />
        <Filtro onFilter={(isActive) => handleFilterToggle(isActive)} />
      </View>
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

        <CardEquipmet filter={filteredEquipments} onPress={handleItemPress} />

      </View>
    </View>
  );
}

export default React.memo(ListaEquipamento)