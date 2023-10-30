import React, { useEffect, useRef, useState } from "react";
import MapView, { Marker, Circle }  from "react-native-maps";
import { useContextUser, useContextoEquipmente } from '../../hooks'
import CustomMarker  from "./CustomMarker";


interface Props{
    mapRegion: any
    setMapRegion: Function
    setNewEquipment: Function
    alertar: Function
    detalhes: Function
    location: any
    newEquipmento: any
}

const MapaView = (props:Props) => {

    const { equipmente } = useContextoEquipmente()
    const { iconePerfil } = useContextUser()
    
    return(
        <MapView
            style={{ flex: 1 }}
            region={props.mapRegion}
            onPress={(e) => {
              props.setNewEquipment(e.nativeEvent.coordinate)
              props.alertar(e.nativeEvent.coordinate)
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
                onPress={() => {
                  props.setMapRegion({
                    latitude: coordenada.latitude,
                    longitude: coordenada.longitude,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.0001})
                  props.detalhes(coordenada._id)
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
                  imageStyle={{width: 35, height: 35, borderRadius: 100, opacity: coordenada.status === true ? 1: 0.4}}
                />
                </Marker>
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
                  imageStyle={{width: 35, height: 35, borderRadius: 100}} 
                />
                </Marker>
            )}

            {props.newEquipmento.latitude !== 0 && (
              <Marker
                coordinate={{
                  latitude: Number(props.newEquipmento.latitude),
                  longitude: Number(props.newEquipmento.longitude)
                }}
                // onPress={(e) => alertar(e.nativeEvent.coordinate)}
              >
                <CustomMarker  
                  url={require('../../assets/novo.png')}  
                  pinColor={"orange"}
                  imageStyle={{width: 35, height: 35, borderRadius: 100}} 
                />  
              </Marker>
            )}

            
          </MapView>
    )
}

export default React.memo(MapaView)