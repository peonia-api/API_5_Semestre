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
import { Create, Equipment } from "../../controllers";
import { AuthContext } from "../../contexts";
import { isConnectad } from "../../utils";
import Reload from "../Reload";
import { Equipmente } from "../../services";
import { upload } from "../../supabase/upload";
import { useNetInfo } from "@react-native-community/netinfo";

function ListaEquipamento({ navigation }: any) {
  const { equipmente, loaded, list10km, setLoaded, setEquipmente } = useContextoEquipmente();
  const [filteredEquipments, setFilteredEquipments] = useState<Props[]>(equipmente);
  const [searchValue, setSearchValue] = useState("");
  const [reload, setReload] = useState(false); // Estado para forçar a re-renderização
  const [showActive, setShowActive] = useState<number | null>(null);
  const theme = useTheme();
  const { typeCorMoon } = useContext(AuthContext);
  const { createEquipment, get10 } = useContextoEquipmente();
  const { isInternetReachable } = useNetInfo()

  async function teste() {
  
    if(isInternetReachable === true && await Create.exite()){
      const dados = await Create.get()
      dados.forEach(async (res:any) => {
        const response = await upload(res.serial, res.url);
        await createEquipment({
          type: res.type,
          numero: res.numero,
          serial: res.serial,
          latitude: res.latitude,
          longitude: res.longitude,
          observations: res.observacao,
          url: response,
          status: true
        });
      })
      await Create.drop()
    }

  }

  teste();

  useEffect(() => {
    const filtered = equipmente.filter((item: any) => {
      const isActiveFilter = showActive === null ? true : (showActive === 1 ? item.status : showActive === 2 ? !item.status : false);
      return (
        isActiveFilter &&
        (item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
          item.serial.toLowerCase().includes(searchValue.toLowerCase()))
      );
    });

    if (showActive === 3) {
      setFilteredEquipments(list10km.filter((item) => {
        return (
          (item.type.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.serial.toLowerCase().includes(searchValue.toLowerCase()))
        );
      }));
    } else {
      setFilteredEquipments(filtered);
    }
  }, [searchValue, showActive, equipmente, reload]); // Adicione "reload" como uma dependência

  const handleItemPress = (itemId: string) => {
    navigation.navigate('Detalhes', { itemId });
  };

  const handleFilterToggle = (isActive: number | null) => {
    setShowActive(isActive);
  };

  const handleReload = () => {
    setSearchValue("");
    (async function () {
      setLoaded(true)
      const resp: any = await Equipmente.get()

      Equipment.insert(resp)
      const equipmentController:any[] = await Equipment.get()
        
      setEquipmente(equipmentController)
      setLoaded(false)
    })()
    // Altere o estado de "reload" para forçar a re-renderização
    setReload(!reload);
  };

  return (
    <View style={[styles.container, { backgroundColor: typeCorMoon[0] }]}>
      <View style={styles.searchFilterContainer}>
        <View style={styles.pesquisaContainer}>
          <Pesquisa onSearch={(text) => setSearchValue(text)} />
        </View>
        <View>
          <Reload onReload={handleReload}/>
        </View>
        <View style={styles.filtroContainer}>
          <Filtro onFilter={(isActive) => handleFilterToggle(isActive)} />
        </View>
      </View>
      <View style={[styles.listaContainer, { backgroundColor: typeCorMoon[0] }]}>
        {loaded && (
          <View style={[styles.uploadingAnimation, { backgroundColor: typeCorMoon[0] }]}>
            <LottieView
              autoPlay={true}
              loop={true}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: typeCorMoon[0]
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

export default React.memo(ListaEquipamento);
