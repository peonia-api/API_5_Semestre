import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React, { useContext } from "react";
import { useContextUser } from "../../hooks";
import { AuthContext } from "../../contexts";

interface Props{
    list10km: any[] 
    mapRegion: any
    setMapRegion: any
}

const Equipamento10km = (props:Props) => {
  const { typeCor } = useContextUser()
  const { typeCorMoon } = useContext(AuthContext);
  
    const centerMapOnItem = (item:any) => {  
        props.mapRegion.latitude === item.latitude ? props.setMapRegion({
          latitude: item.latitude,
          longitude: item.longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.0001,})
        :
        props.setMapRegion({
          latitude: item.latitude,
          longitude: item.longitude,
          latitudeDelta: 0.0001,
          longitudeDelta: 0.0001,
        });
      };

    return(
        <View style={{ height: '50%' }}>
                <FlatList
                data={props.list10km}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={[styles.card,{ backgroundColor: item.status == 1 ? typeCor[1] : typeCorMoon[0], borderColor: typeCor[1]}]}
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
    )
  }
  
export default React.memo(Equipamento10km)