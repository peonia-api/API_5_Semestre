import React, { useEffect, useRef, useState } from "react";
import { View, Image, Alert, TouchableOpacity, Text, FlatList } from "react-native";
import MapView, { Marker, Circle }  from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import LottieView from 'lottie-react-native';
import { useContextoEquipmente } from '../../hooks'
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { PanResponder, Animated } from 'react-native';


export default function Mapa({ navigation }: any) {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { equipmente, get10, list10km } = useContextoEquipmente()

  const [confirm, setConfirm ] = useState<boolean>(false)
  const [ newEquipmento, setNewEquipment ] = useState({ latitude: 0, longitude: 0} as any)
  const [flatListVisible, setFlatListVisible] = useState(false);
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.010,
    longitudeDelta: 0.010,
  });
  const [gestureY, setGestureY] = useState(0);

  const handlePanResponderMove = (_:any, gestureState:any) => {
    if (gestureState.dy > 0) {
      // Deslizamento para baixo: feche a FlatList
      setFlatListVisible(false);
    } else if (gestureState.dy < 0) {
      // Deslizamento para cima: abra a FlatList
      setFlatListVisible(true);
    }

    // Atualize o estado com a posição vertical do gesto
    setGestureY(gestureState.dy);
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });
  
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
    (async function () {
      await get10()
    })()
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
          <MapView
            style={{ flex: 1 }}
            region={mapRegion}
            onPress={(e) => {
              setNewEquipment(e.nativeEvent.coordinate)
              alertar(e.nativeEvent.coordinate)
            }}
          >
            {equipmente.map((coordenada, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: Number(coordenada.latitude),
                  longitude: Number(coordenada.longitude)
                }}
                title={`${coordenada.type} (Serial: ${coordenada.serial})`}
                description={`Latitude: ${coordenada.latitude}, Longitude: ${coordenada.longitude}`}
                onPress={() => detalhes(coordenada._id)}
              />
            ))}

            {/* <Circle center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }} 
              radius={10000}
              fillColor="#9EC0D9"
              // strokeWidth={1}
              >
              
            </Circle> */}
            
            {location.coords.latitude && location.coords.longitude && (
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
                title="Minha Localização"
                pinColor="blue"
              />
            )}

            {newEquipmento.latitude !== 0 && (<Marker
              coordinate={{
                latitude: Number(newEquipmento.latitude),
                longitude: Number(newEquipmento.longitude)
              }}
              pinColor="orange"
              // onPress={(e) => alertar(e.nativeEvent.coordinate)}
            />)}

            
          </MapView>
          
        )
        
      )}
      <Animated.View style={{
          position: 'absolute',
          top: flatListVisible ? '45%': '90%',
          left: '50%',
          transform: [{ translateX: -35 }, { translateY: -35 }]
        }}
        {...panResponder.panHandlers}
      >
        <TouchableOpacity
            onPress={() => setFlatListVisible(!flatListVisible)}
            style={[styles.showFlatListButton, { backgroundColor: 'rgba(0, 0, 0, 0)' }]}
          >
          <Icon name={flatListVisible ?  "angle-double-down" :"angle-double-up"} size={70} color="#000000" />
        </TouchableOpacity>
      </Animated.View>
      {flatListVisible && (
        <View style={{ height: '50%' }}>
          <FlatList
            data={list10km}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.card, { backgroundColor: item.status == false ? '#b3b1b1' : '#f0fafc' }]}
                onPress={() => centerMapOnItem(item)}
              >
                <Image source={{ uri: item.url[0] }} style={styles.image} />
                <View style={styles.textContainer}>
                  <Text style={styles.textfont}>{item.type}</Text>
                  <Text style={styles.textSub}>{item.serial}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      
    </View>
  );
}
