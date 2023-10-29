import React from "react"
import { TouchableOpacity, Image, Text, ListRenderItem, FlatList, View } from "react-native"
import styles from "./style";


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

const CardUser = ({filter, onPress}:any) => {

  return(
      <FlatList
      data={filter}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={[styles.card,{ backgroundColor: item.status == 0 ? '#b3b1b1' : '#f0fafc' }]} onPress={() => onPress(item.id)}>
          <Image source={{ uri: item.url[0] }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.textfont}>{item.userName}</Text>
            <Text style={styles.textSub}>{item.status}</Text>
            {/* {item.status == 0 && (
            <View style={[styles.containerStatus, { backgroundColor: '#fc3f3f' }]}>
              <Text style={styles.textStatus}>DESATIVADO</Text>
            </View>
          )} */}
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default React.memo(CardUser)

