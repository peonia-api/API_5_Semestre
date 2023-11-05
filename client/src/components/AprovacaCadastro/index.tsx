import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useContextUser } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/user";
import  CardUser  from "../Card/cardUser";



function AprovacaoCadastro({ navigation }: any) {
  const { listUser, loading, setLoading } = useContextUser();
  const [filteredUser, setFilteredUser] = useState<Props[]>(listUser);
  const [searchValue, setSearchValue] = useState(""); 

  const status = (valor:any) => {
    console.log(valor);
    
    if(valor == 1){
      return "aprovado"
    }
    else if(valor == 2){
      return "pendente"
    }
    else if(valor == 3){
      return "arquivado"
    }
    else{
      return ""
    }
  }
  
  useEffect(() => {
    setLoading(false);
    const filtered = listUser.filter((item: {userName: string; status: number; icon: string; id: string}) =>
      item.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
      status(item.status).toString().includes(searchValue.toLowerCase())
    );
    setFilteredUser(filtered);
  }, [searchValue, listUser]);
  

  const handleItemPress = (userId: string) => {
    navigation.navigate('Perfil de Aprovação', { userId });
  };


  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Pesquisa onSearch={(text) => setSearchValue(text)} />
      </SafeAreaView>
      <View style={styles.listaContainer}>
        {loading && (
          <View style={styles.uploadingAnimation}>
          <LottieView
              autoPlay={true}
              loop={true}
              style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
              }}
              source={require('../../assets/carregando.json')}
          />
          </View>
        )}
        <CardUser filter={filteredUser} onPress={handleItemPress}/>
       
      </View>
    </View>
  );
}

export default React.memo(AprovacaoCadastro)
