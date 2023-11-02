import React, { useRef, useState } from "react"
import { TouchableOpacity, Image, Text, ListRenderItem, FlatList, View } from "react-native"
import styles from "./style";
import { FooterList } from "./FooterList";


enum UserType {
  Admin = 1,
  Comum = 2
}

enum Status {
  Ativo = 1,
  Pendente = 2,
  Desativado = 3,
}
interface User {
    id: number,
    userCpf: string,
    userMatricula: string,
    userTelefone: string,
    userName: string,
    userEmail: string,
    userType: UserType,
    userPassword: string,
    userStatus: Status,
    token: string,
    icone: string,
    status: number,
}


const status = (valor:any) => {
  if(valor == 1){
    return "Aprovado"
  }
  else if(valor == 2){
    return "Pendente"
  }
  else if(valor == 3){
    return "Arquivado"
  }
}

const CardUser = ({filter, onPress}:any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const flatListRef = useRef<FlatList | null>(null);
  const [loading, setLoading] = useState(false);

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
      <FlatList
      ref={(ref) => (flatListRef.current = ref)}
      data={filter.slice(0, currentPage * itemsPerPage)}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.card,{ backgroundColor: item.status == 0 ? '#b3b1b1' : '#f0fafc' }]} onPress={() => onPress(item.id)}>
          <Image source={{ uri: item.icone }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textfont}>{item.userName}</Text>
            <Text style={styles.textSub}>{status(item.status)}</Text>
          </View>
        </TouchableOpacity>
      )}
      onEndReached={() => loadMoreData()}
      onEndReachedThreshold={0.3}
      ListFooterComponent={<FooterList lood={loading} />}
    />
  )
}

export default React.memo(CardUser)

