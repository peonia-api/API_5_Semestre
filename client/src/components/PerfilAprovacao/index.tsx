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

function ApprovalProfile({ route, navigation }: any) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<any>("");
    const [userCpf, setUserCpf] = useState<string>("");
    const [userMatricula, setUserMatricula] = useState<string>("");
    const [userTelefone, setUserTelefone] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [image, setImage] = useState<any>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const { itemId } = route.params
    const camRef = useRef<any | null>(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [isCameraVisible, setCameraVisible] = useState(false);
    const [type, setType] = useState(CameraType.back);
    const [selectedImages, setSelectedImages] = useState<String[] | any>([]);

    const {user, setUser, loading, setLoading , getUser } = useContextUser();
   

    useFocusEffect(useCallback(() => {
        const { itemId } = route.params

        try {

            async function init() {
                const dadoUsuario = await getUser(itemId)
                if (dadoUsuario) {
                    setUserName(dadoUsuario?.name || '');
                    setUserEmail(dadoUsuario?.email || '');
                    setUserCpf(dadoUsuario?.cpf || '');
                    setUserMatricula(dadoUsuario?.matricula || '');
                    setUserTelefone(dadoUsuario?.telephone || '');
                    setUserId(dadoUsuario?._id || '');
                }
            }
            init()

        } catch (err) {
            console.log("Assim não");
            //navigation.navigate('Cadastro')
        }


    }, [user, route.params]))


    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    if (hasPermission === null) {
        return <Text>Verificando permissão de câmera...</Text>;
    }

    if (!hasPermission) {
        return <Text>Permissão de câmera não concedida</Text>;
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    async function takePicture() {
        if (camRef) {
            const data = await camRef.current.takePictureAsync();
            setCapturedPhoto(data.uri)
            selectedImages[selectedImages.length] = data.uri
            setCameraVisible(false);
        }

    }
    const showCamera = () => {
        setCameraVisible(true);
    };

    const hideCamera = () => {
        setCameraVisible(false);
    };

    const mudarPagi = () => {
        setLoading(false)
        console.log("oii");
        
        navigation.navigate('Usuários')
    }

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                // allowsEditing: true,
                allowsMultipleSelection: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                const uris = result.assets.map((asset) => asset.uri);
                setSelectedImages([...selectedImages, ...uris]);
            }
        } else {
            Alert.alert("Permissão negada", "Você precisa permitir o acesso à galeria de imagens para adicionar uma imagem.");
        }
    };




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
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                </View>

                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="NOME COMPLETO"
                            style={styles.inputLogin}
                            defaultValue={userName}
                            onChangeText={(text) => setUserName(text)}
                            placeholderTextColor="black"
                           
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            style={styles.inputLogin}
                            defaultValue={userCpf}
                            onChangeText={(text) => setUserCpf(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            defaultValue={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={styles.inputLogin}
                            defaultValue={userName}
                            onChangeText={(text) => setUserTelefone(text)}
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            defaultValue={userMatricula}
                            onChangeText={(text) => setUserMatricula(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    {/* <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TIPO DE USUÁRIO"
                            style={styles.inputLogin}
                            value={userTelefone}
                            onChangeText={(text) => setUserTelefone(text)}
                            placeholderTextColor="black"
                        />
                    </View> */}
                   
                    <View style={styles.inputWrapper}>
                    <Picker
                    style={styles.dropDown}
                    // selectedValue={selectedEquipa}
                    // onValueChange={handleEquipamentoChange}
                    // style={styles.picker}
                    >
                    <Picker.Item label="TIPO DE USUÁRIO" value="" enabled={false} />
                    <Picker.Item label="Administrador" value="Admin"  />
                    <Picker.Item label="Padrão" value="Transformador" />
                    </Picker>
                    </View>
                </View>

                <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botaoAcao} >
                    <View style={styles.botaoConteudo}>
                        <Icon name="check" size={25} color="#4DB9DB" />
                        <Text style={{ color: 'white', marginLeft: 10 }}>APROVAR</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.botaoAcao} >
                    <View style={styles.botaoConteudo}>
                        <Icon name="trash" size={25} color="#4DB9DB" />
                        <Text style={{ color: 'white', marginLeft: 10 }}>EXCLUIR</Text>
                    </View>
                  </TouchableOpacity>
                </View>    

            </ScrollView>
        </View>
    );

};


export default React.memo(ApprovalProfile)