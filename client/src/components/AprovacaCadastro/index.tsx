import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./style";
import { useContextUser } from '../../hooks';
import Pesquisa from "../Pesquisa";
import LottieView from 'lottie-react-native';
import { Props } from "../../types/user";
import  CardUser  from "../Card/cardUser";



function AprovacaoCadastro({ navigation }: any) {
  const { listUser, loading } = useContextUser();
  const [filteredUser, setFilteredUser] = useState<Props[]>(listUser);
  const [searchValue, setSearchValue] = useState(""); 

  useEffect(() => {
    const filtered = listUser.filter((item: {userName: string; status: string; icon: string; id: string}) =>
      item.userName.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.status.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUser(filtered);
  }, [searchValue, listUser]);
  

  const handleItemPress = (userId: string) => {
    navigation.navigate('Perfil de Aprovação', { userId });
    navigation.navigate('Pendente', { userId});
    navigation.navigate('Arquivado', { userId });

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
