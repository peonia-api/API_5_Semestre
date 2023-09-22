import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import LottieView from 'lottie-react-native';

export default function Mapa() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

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

  const coordenadas = [
    { latitude: -23.171898582924346, longitude: -45.8159475113561, title: "Pereira Lanches", serial: "12345" },
    { latitude: -23.171616557695884, longitude: -45.81613711352644, title: "Marmitaria Jerônimoo", serial: "67890" },
    { latitude: -23.17172230680727, longitude: -45.81550332926822, title: "Adega da Avenidas", serial: "54321" },
    { latitude: -23.171568866892837, longitude: -45.81582811550731, title: "Espetinho do Jerônimoo", serial: "98765" },
    { latitude: -23.17181556483889, longitude: -45.81586181915286, title: "Lucia Confecções", serial: "13579" },
  ];

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
            {coordenadas.map((coordenada, index) => (
              <Marker
                key={index}
                coordinate={coordenada}
                title={`${coordenada.title} (Serial: ${coordenada.serial})`}
                description={`Latitude: ${coordenada.latitude}, Longitude: ${coordenada.longitude}`}
              />
            ))}
          </MapView>
        )
      )}
    </View>
  );
}
