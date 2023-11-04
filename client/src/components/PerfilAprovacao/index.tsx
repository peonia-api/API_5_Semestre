import React, { useState, useEffect, useCallback, useRef } from "react";
import { ScrollView, TextInput, View, Image, TouchableOpacity, Alert, Modal, Text } from "react-native";
import styles from "./style";
import Storage from 'expo-storage';
import * as ImagePicker from 'expo-image-picker';
import { User } from "../../services";
import Icon from 'react-native-vector-icons/FontAwesome';
import { uploadIcone } from "../../supabase/upload";
import { useContextUser,  } from "../../hooks";
import LottieView from 'lottie-react-native';
import { Picker } from "@react-native-picker/picker";
import { useFocusEffect } from "@react-navigation/native";
import { Camera, CameraType } from 'expo-camera';
import { Button } from "../button";
import {Status} from '../../types/user';

function ApprovalProfile({ route, navigation }: any) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<any>("");
    const [userCpf, setUserCpf] = useState<string>("");
    const [userMatricula, setUserMatricula] = useState<string>("");
    const [userTelefone, setUserTelefone] = useState<string>("");
    const { itemId } = route.params
    const [userId, setUserId] = useState<string>("");
    const [image, setImage] = useState<any>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);

    const camRef = useRef<any | null>(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [isCameraVisible, setCameraVisible] = useState(false);
    const [selectedImages, setSelectedImages] = useState<String[] | any>([]);
    const [icone, setUserIcone] = useState<any>(null);
    const [userType, setUserType] = useState<string>();
    const [status, setStatus] = useState<Status | null>(null);

    const {user, loading , getUser } = useContextUser();
   

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

   
    console.log("perereca")
    console.log('userType:', userType);
    console.log('Status.Pendente:', Status.Pendente);



    return (
        <View style={styles.container}>
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

            <ScrollView>
                <View style={styles.containerImagem}>
                    {icone && <Image source={{ uri: icone }} style={styles.image} />}
                </View>

                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="NOME COMPLETO"
                            style={styles.inputLogin}
                            defaultValue={userName}
                            placeholderTextColor="black"
                           
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            style={styles.inputLogin}
                            defaultValue={userCpf}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            defaultValue={userEmail}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={styles.inputLogin}
                            defaultValue={userName}
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            defaultValue={userMatricula}
                            placeholderTextColor="black"
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
                        <Picker.Item label="TIPO DE USUÁRIO" value="" enabled={false} />
                        <Picker.Item label="Administrador" value="1"  />
                        <Picker.Item label="Padrão" value="2" />
                        </Picker>
                    </View>
                    )}
                </View>

                <View>
                    {status === Status.Pendente && (
                        <View style={styles.containerBotao}>
                        <TouchableOpacity style={styles.botaoAcao}>
                            <View style={styles.botaoConteudo}>
                            <Icon name="check" size={25} color="#4DB9DB" />
                            <Text style={{ color: 'white', marginLeft: 10 }}>APROVAR</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botaoAcao}>
                            <View style={styles.botaoConteudo}>
                            <Icon name="trash" size={25} color="#4DB9DB" />
                            <Text style={{ color: 'white', marginLeft: 10 }}>EXCLUIR</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    )}
    
                    {status === Status.Desativado && (
                        <View style={styles.containerB}>
                        <Button
                            styles={styles.botaoAction}
                            stylesText={styles.textoBotao}
                            // onPress={handleAtivar}
                            texto={'ATIVAR'}
                        />
                        </View>
                    )}
            
                    {status === Status.Ativo && (
                        <View style={styles.containerB}>
                        <Button
                            style={styles.botaoA}
                            stylesText={styles.textoBotao}
                            // onPress={handleAtualizarDados}
                            texto={'ATUALIZAR DADOS'}
                        />
                        </View>
                    )}
                </View>
                </ScrollView>
                </View>

         
    );
};


export default React.memo(ApprovalProfile)