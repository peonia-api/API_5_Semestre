import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";
import React from "react";

interface Props{
    list10km: any[] 
    centerMapOnItem: Function
}

const Equipamento10km = ({list10km, centerMapOnItem}:Props) => {
    return(
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
    )
  }
  
export default React.memo(Equipamento10km)