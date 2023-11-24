import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { useContextoEquipmente } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/equipmente";
import CardEquipmet from "../Card";
import Filtro from "../Filtro";
import { useTheme } from '../../hooks'
import { Create } from "../../controllers";
import { AuthContext } from "../../contexts";
import { isConnectad } from "../../utils";

function ListaEquipamento({ navigation }: any) {
  const { equipmente, loaded, list10km } = useContextoEquipmente();
  const [filteredEquipments, setFilteredEquipments] = useState<Props[]>(equipmente);
  const [searchValue, setSearchValue] = useState("");

  const [showActive, setShowActive] = useState<number | null>(null); // Inicialize com null
  const theme = useTheme();
  const { typeCorMoon } = useContext(AuthContext);

  async function teste() {
    console.log(await Create.get());
  }

  teste()

  useEffect(() => {
    const filtered = equipmente.filter((item:any) => {
      const isActiveFilter = showActive === null ? true : (showActive === 1 ? item.status : showActive === 2 ? !item.status : false);
      return (
        isActiveFilter &&
        (item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.serial.toLowerCase().includes(searchValue.toLowerCase()))
      );
    });
    if (showActive === 3) {
      setFilteredEquipments(list10km.filter((item) => {return (
        (item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.serial.toLowerCase().includes(searchValue.toLowerCase()))
      );}));
    } else {
      setFilteredEquipments(filtered);
    }
  }, [searchValue, showActive, equipmente]);

  const handleItemPress = (itemId: string) => {
    
    navigation.navigate('Detalhes', { itemId });
  };

  const handleFilterToggle = (isActive: number | null) => {
    setShowActive(isActive);
  };

 

  return (
    <View style={[styles.container, { backgroundColor: typeCorMoon[0] }]}>
      <View style={styles.searchFilterContainer}>
        <View style={styles.pesquisaContainer}>
          <Pesquisa onSearch={(text) => setSearchValue(text)} />
        </View>
        <View style={styles.filtroContainer}>
          <Filtro onFilter={(isActive) => handleFilterToggle(isActive)} />
        </View>
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