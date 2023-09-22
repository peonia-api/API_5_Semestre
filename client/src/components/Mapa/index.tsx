import React, { useEffect, useRef, useState } from "react";
import { View, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import LottieView from 'lottie-react-native';
import { useContextoEquipmente } from '../../hooks'

export default function Mapa() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const { equipmente } = useContextoEquipmente()


  
  async function requestLocationsPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
      setMapLoaded(true); // Define mapLoaded como true após obter a localização.
    }
  }

  useEffect(() => {
    requestLocationsPermissions();
  }, []);

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
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.010,
              longitudeDelta: 0.010,
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
              />
            ))}

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
          </MapView>
        )
      )}
    </View>
  );
}
