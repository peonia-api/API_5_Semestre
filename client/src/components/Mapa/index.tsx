import React, { useEffect, useState } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import LottieView from 'lottie-react-native';
import { useContextUser, useContextoEquipmente } from '../../hooks'
import Equipamento10km from './List10km'
import MapaView from "./Mapa";
import SubList from "./Animated";

export default function Mapa({ navigation }: any) {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { list10km } = useContextoEquipmente()

  const [confirm, setConfirm ] = useState<boolean>(false)
  const [ newEquipmento, setNewEquipment ] = useState({ latitude: 0, longitude: 0} as any)
  const [flatListVisible, setFlatListVisible] = useState(false);
  const [mapRegion, setMapRegion] = useState({} as any);


  

  async function requestLocationsPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setMapRegion({
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        latitudeDelta: 0.010,
        longitudeDelta: 0.010,
      })
      setLocation(currentPosition);
      setMapLoaded(true); // Define mapLoaded como true após obter a localização.

    }
  }
  useEffect( () => { 
    requestLocationsPermissions();
  }, []);

 

  const alertar = (e:any) => {
    const newEquipment = e
    setTimeout(function() {
      Alert.alert("Criar", "Você deseja criar um equipamento aqui?", [
        {
          text: 'NÃO',
          onPress: () => {
            setConfirm(false)
          },
        },
        {
          text: 'SIM',
          onPress: () => {
            setConfirm(true)
            navigation.navigate('Novo Equipamento', {newEquipment})
          },
        },
      ])
    }, 1000)
  }


  const detalhes = (itemId:any) => {
    setTimeout(function() {
      Alert.alert("Detalhes", "Você deseja ver os detalhes do equipamento?", [
        {
          text: 'NÃO',
          onPress: () => {
            setConfirm(false)
          },
        },
        {
          text: 'SIM',
          onPress: () => {
            setConfirm(true)
            navigation.navigate('Detalhes', {itemId})
          },
        },
      ])
    }, 1000); 
  }
  
  const centerMapOnItem = (item:any) => {  
    mapRegion.latitude === item.latitude ? setMapRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.0001,})
    :
    setMapRegion({
      latitude: item.latitude,
      longitude: item.longitude,
      latitudeDelta: 0.0001,
      longitudeDelta: 0.0001,
    });
  };
  
  
  return (
    <View style={{ flex: 1 }}>
      {!mapLoaded ? (
        <LottieView
          autoPlay={true}
          loop={true}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: 1,
            backgroundColor: 'white',
          }}
          source={require('../../assets/carregando.json')}
         
        />
      ) : (
        location && (
          <MapaView 
            alertar={alertar} 
            detalhes={detalhes} 
            location={location}
            mapRegion={mapRegion}
            newEquipmento={newEquipmento}
            setMapRegion={setMapRegion}
            setNewEquipment={setNewEquipment}
          />
          
        )
        
      )}
      <SubList flatListVisible={flatListVisible} setFlatListVisible={setFlatListVisible}/>
      {flatListVisible && (
        <Equipamento10km list10km={list10km} centerMapOnItem={centerMapOnItem}/>
      )}
      
    </View>
  );
}
