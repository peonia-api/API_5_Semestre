import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import { Title } from "react-native-paper";

export default function Mapa() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requestLocationsPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationsPermissions();
  }, []);


  const coordenadas = [
    { latitude: -23.171898582924346, longitude: -45.8159475113561, title: "Pereira Lanches"},
    { latitude: -23.171616557695884, longitude: -45.81613711352644, title: "Marmitaria Jerônimoo"}, 
    { latitude: -23.17172230680727, longitude: -45.81550332926822, title: "Adega da Avenidas"},
    { latitude: -23.171568866892837, longitude: -45.81582811550731, title: "Espetinho do Jerônimoo" }, 
    { latitude: -23.17181556483889, longitude: -45.81586181915286, title: "Lucia Confecções" },
  ];

  return (
    <View style={{ flex: 1 }}>
      {location && (
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
            title={coordenada.title}

            description={`Latitude: ${coordenada.latitude}, Longitude: ${coordenada.longitude}`}
          />
        ))}
        </MapView>
      )}
    </View>
  );
}
