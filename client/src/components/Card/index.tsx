import React, { useContext, useRef, useState } from "react"
import { TouchableOpacity, Image, Text, ListRenderItem, FlatList, View } from "react-native"
import styles from "./style";
import { FooterList } from "./FooterList";
import { AuthContext } from "../../contexts";

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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const flatListRef = useRef<FlatList | null>(null);
  const [loading, setLoading] = useState(false);
  const { typeCorMoon } = useContext(AuthContext);

  const loadMoreData = () => {
    if (filter.length > currentPage * itemsPerPage) {
      setLoading(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1); // Carrega mais itens
        setLoading(false); // Encerra a animação
      }, 1000);
    }
  };

    return(
      <View style={styles.container}>
        <FlatList
        ref={(ref) => (flatListRef.current = ref)}
        data={filter.slice(0, currentPage * itemsPerPage)}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.card,{ backgroundColor: item.status == 1 ? typeCorMoon[1] : typeCorMoon[0], borderColor: typeCorMoon[1]}]} onPress={() => onPress(item._id)}>
            <Image source={{ uri: item.url[0] }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.textfont}>{item.type}</Text>
              <Text style={styles.textSub}>{item.serial}</Text>
            </View>
          </TouchableOpacity>
          
        )}
        onEndReached={() => loadMoreData()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={<FooterList lood={loading} />}
      />
    </View>
  )
}


export default React.memo(CardEquipmet)

