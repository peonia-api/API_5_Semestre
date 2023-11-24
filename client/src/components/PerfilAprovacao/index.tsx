import React, { useState, useCallback, useRef } from "react";
import { ScrollView, TextInput, View, Image, TouchableOpacity, Text } from "react-native";
import styles from "./style";
import { User } from "../../services";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useContextUser,  } from "../../hooks";
import LottieView from 'lottie-react-native';
import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "@react-navigation/native";
import { Button } from "../button";
import {Status} from '../../types/user';

function ApprovalProfile({ route, navigation }: any) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<any>("");
    const [userCpf, setUserCpf] = useState<string>("");
    const [userMatricula, setUserMatricula] = useState<string>("");
    const [userTelefone, setUserTelefone] = useState<string>("");

    const [icone, setUserIcone] = useState<any>(null);
    const [userType, setUserType] = useState<string>();
    const [status, setStatus] = useState<Status | null>(null);
    const {typeCorMoon} = useContextUser();

    const {user, loading , getUser, listUser, setListUser, setLoading, typeCor } = useContextUser();
   

    useFocusEffect(useCallback(() => {
        const { userId } = route.params
        console.log(userId)

        try {

            async function init() {
                const dadoUsuario = await getUser(userId)
                if (dadoUsuario) {
                    setUserName(dadoUsuario?.userName || '');
                    setUserEmail(dadoUsuario?.userEmail || '');
                    setUserCpf(dadoUsuario?.userCpf || '');
                    setUserMatricula(dadoUsuario?.userMatricula || '');
                    setUserTelefone(dadoUsuario?.userTelefone || '');
                    setUserIcone(dadoUsuario?.icone || '');
                    setUserType(dadoUsuario?.userType || '');
                    setStatus(dadoUsuario?.status || null);
                
                }
                console.log(dadoUsuario);
                
            }
            init()

        } catch (err) {
            console.log("Assim não");
            //navigation.navigate('Cadastro')
        }


    }, [user, route.params]))

    const handleAction = async (change: number) => {

        try {
            setLoading(true);
            const list = await User.patchStatus(userEmail, {status: change}).catch(() => {
                alert("Erro ao alterar status")
            })
            if (list) {
                setListUser((prevListUser: any) => {
                  const updatedIndex = prevListUser.findIndex((item: any) => item.id === list.id);
                  if (updatedIndex !== -1) {
                    const updatedList = [...prevListUser];
                    updatedList[updatedIndex] = list;
                    return updatedList;
                  }
                  return prevListUser;
                });
                const status = (valor:any) => {
                    console.log(valor);

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

                const changed:any = status(change)
             
                await User.getEmailStatus(userEmail, changed)
            }
        } catch (err) {
            console.log("erro")
            
        }
        finally{
            setLoading(false)
            navigation.navigate('Usuários')
            
        }
    }
   

    return (
        <View style={[styles.container, {backgroundColor: typeCor[1]}]}>
            {loading && (
                <View style={[styles.uploadingAnimation, {backgroundColor: typeCorMoon[0]}]}>
                    <LottieView
                        autoPlay={true}
                        loop={true}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        source={require('../../assets/carregando.json')}
                    />
                </View>
            )}

            <ScrollView>
                <View style={styles.containerImagem}>
                    {icone && <Image source={{ uri: icone }} style={styles.image} />}
                </View>

                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="NOME COMPLETO"
                            style={[styles.inputLogin, { color: "black" }]}
                            defaultValue={userName}
                            placeholderTextColor="black"
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            style={[styles.inputLogin, { color: "black" }]}
                            defaultValue={userCpf}
                            placeholderTextColor="black"
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={[styles.inputLogin, { color: "black" }]}
                            defaultValue={userEmail}
                            placeholderTextColor="black"
                            editable={false}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={[styles.inputLogin, { color: "black" }]}
                            defaultValue={userName}
                            placeholderTextColor="black"
                            editable={false}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={[styles.inputLogin, { color: "black" }]}
                            defaultValue={userMatricula}
                            placeholderTextColor="black"
                            editable={false}
                        />
                    </View>
        
                   
                    {status !== Status.Ativo && (
                    <View style={styles.inputWrapper}>
                        <Picker
                        style={styles.dropDown}
                        selectedValue={userType?.toString()}
                        // onValueChange={handleEquipamentoChange}
                        // style={styles.picker}
                        >
                        <Picker.Item label="Tipo de usuário" value="" enabled={false} />
                        <Picker.Item label="Administrador" value="1"  />
                        <Picker.Item label="Padrão" value="2" />
                        </Picker>
                    </View>
                    )}
                </View>

                <View>
                    {status === Status.Pendente && (
                        <View style={styles.containerBotao}>
                        <TouchableOpacity style={styles.botaoAcao} onPress={() => handleAction(1)}>
                            <View style={styles.botaoConteudo}>
                            <Icon name="check" size={25} color="#4DB9DB" />
                            <Text style={{ color: 'white', marginLeft: 10 }}>Aprovar</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoAcao} onPress={() => handleAction(3)}>
                            <View style={styles.botaoConteudo}>
                            <Icon name="trash" size={25} color="#4DB9DB" />
                            <Text style={{ color: 'white', marginLeft: 10 }}>Excluir</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    )}
    
                    {status === Status.Desativado && (
                        <View style={styles.containerB}>
                        <Button
                            styles={styles.botaoAction}
                            stylesText={styles.textoBotao}
                            texto={'ATIVAR'}
                            onPress={() => handleAction(1)}
                        />
                        </View>
                    )}
            
                    {status === Status.Ativo && (
                        <View style={styles.containerB}>
                        <Button
                            styles={styles.botaoArroz}
                            stylesText={styles.textoBotao}
                            onPress={() => handleAction(3)}
                            texto={'DESATIVAR USUÁRIO'}
                        />
                        </View>
                    )}
                </View>
                </ScrollView>
                </View>

    );
};


export default React.memo(ApprovalProfile)