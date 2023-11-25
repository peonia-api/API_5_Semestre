import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useContextUser, useContextoEquipmente } from "../../hooks";
import CustomMarker from "./CustomMarker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./style";
import Icon from "./Icon";

interface Props {
  mapRegion: any;
  setMapRegion: Function;
  setNewEquipment: Function;
  alertar: Function;
  detalhes: Function;
  location: any;
  newEquipmento: any;
}

const MapaView = (props: Props) => {
  const { equipmente } = useContextoEquipmente();
  const { iconePerfil } = useContextUser();

  const [key, setKey] = useState(1);

  useEffect(() => {
    console.log("Tela recarregada!");
  }, [key]);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        key={key}
        style={{ flex: 1 }}
        region={props.mapRegion}
        onPress={(e) => {
          props.setNewEquipment(e.nativeEvent.coordinate);
          props.alertar(e.nativeEvent.coordinate);
        }}
      >
        {equipmente.map((coordenada, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: Number(coordenada.latitude),
              longitude: Number(coordenada.longitude),
            }}
            title={`${coordenada.type} (Serial: ${coordenada.serial})`}
            description={`Latitude: ${coordenada.latitude}, Longitude: ${coordenada.longitude}`}
            onPress={() => {
              props.setMapRegion({
                latitude: coordenada.latitude,
                longitude: coordenada.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.0001,
              });
              props.detalhes(coordenada);
            }}
          >
            <CustomMarker
              url={{ uri: coordenada.url[0] }}
              pinColor={
                coordenada.latitude === props.mapRegion.latitude
                  ? "gold"
                  : coordenada.status === true
                    ? "red"
                    : "silver"
              }
              imageStyle={{
                width: 35,
                height: 35,
                borderRadius: 100,
                opacity: coordenada.status === true ? 1 : 0.4,
              }}
            />
          </Marker>
        ))}

        {props.location.coords.latitude && props.location.coords.longitude && (
          <Marker
            coordinate={{
              latitude: props.location.coords.latitude,
              longitude: props.location.coords.longitude,
            }}
            title="Minha Localização"
          >
            <CustomMarker
              url={{ uri: iconePerfil }}
              pinColor={"blue"}
              imageStyle={{ width: 35, height: 35, borderRadius: 100 }}
            />
          </Marker>
        )}

        {props.newEquipmento.latitude !== 0 && (
          <Marker
            coordinate={{
              latitude: Number(props.newEquipmento.latitude),
              longitude: Number(props.newEquipmento.longitude),
            }}
          >
            <CustomMarker
              url={require("../../assets/novo.png")}
              pinColor={"orange"}
              imageStyle={{ width: 35, height: 35, borderRadius: 100 }}
            />
          </Marker>
        )}
      </MapView>
      <Icon
        location={props.location}
        setMapRegion={props.setMapRegion}
        onReload={() => setKey((prevKey) => prevKey + 1)} // Atualizando o key ao clicar no ícone
      />
    </View>
  );
};

export default React.memo(MapaView);
