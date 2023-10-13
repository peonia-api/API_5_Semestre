import React from "react"
import { TouchableOpacity, Image, Text, ListRenderItem, FlatList } from "react-native"
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
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.column,
                { backgroundColor: item.status ? 'transparent' : 'rgb(248, 248, 259)', opacity: item.status ? 1 : 0.4 },
              ]}
              onPress={() => onPress(item._id)}
            >
              <Image
                source={{ uri: item.url[0] }}
                style={[
                  styles.image,
                  { opacity: item.status ? 1 : 0.3}, 
                ]}
              />
              <Text style={[styles.textfont, { opacity: item.status ? 1 : 0.3}]}>{item.type}</Text>
              <Text style={{ opacity: item.status ? 1 : 0.3}}>{item.serial}</Text>
            </TouchableOpacity>
          )}
        />
    )
}

export default React.memo(CardEquipmet)
