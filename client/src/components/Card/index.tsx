import React from "react"
import { TouchableOpacity, Image, Text, ListRenderItem, FlatList, View } from "react-native"
import styles from "./style";


interface Equipamentos{
    _id: string
    type: string,
    numero: number,
    serial: string,
    latitude: number,
    longitude: number,
    observations: string,
    url: string[],
    status: boolean,
    filter: Function,
    onPress: Function
}

const CardEquipmet = ({filter, onPress}:any) => {

    
    return(
        <FlatList
        data={filter}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card,{ backgroundColor: item.status == 0 ? '#b3b1b1' : '#f0fafc' }]} onPress={() => onPress(item._id)}>
            <Image source={{ uri: item.url[0] }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.textfont}>{item.type}</Text>
              <Text style={styles.textSub}>{item.serial}</Text>
              {item.status == 0 && (
              <View style={[styles.containerStatus, { backgroundColor: '#fc3f3f' }]}>
                <Text style={styles.textStatus}>DESATIVADO</Text>
              </View>
            )}
            </View>
          </TouchableOpacity>
        )}
      />
    )
}

export default React.memo(CardEquipmet)
