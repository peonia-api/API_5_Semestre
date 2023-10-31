import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert, Modal } from "react-native"
import styles from "./style";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { BotaoAtualizar, BotoesDetalhes } from "../Botao";
import { useContextoEquipmente } from "../../hooks";
import LottieView from 'lottie-react-native';
import { useFocusEffect } from "@react-navigation/native";
import { removeFileOne } from "../../supabase/delete";
import { upload } from "../../supabase/upload";
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from "@expo/vector-icons"
import Carousel from "react-native-snap-carousel";



Icon.loadFont();

export default function Detalhe({ route, navigation }: any) {

    const { equipmente, setLoaded, loaded, getEquipment, putEquipment } = useContextoEquipmente();
    const { itemId } = route.params

    const [selectedEquipa, setSelectedEquipa] = useState<string>();
    const [image, setImage] = useState<any>();
    const [numero, setNumero] = useState<string>();
    const [imei, setImei] = useState<any>();
    const [latitude, setLatitude] = useState<string>();
    const [longitude, setLongitude] = useState<string>();
    const [observacoes, setObservacoes] = useState<string>();
    const [status, setStatus] = useState<boolean>();
    const [verficaImage, setVerificaImagem] = useState<string[] | any>([])
    const [isEnabled, setIsEnabled] = useState(false);

    const [type, setType] = useState(CameraType.back);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const camRef = useRef<any | null>(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [isCameraVisible, setCameraVisible] = useState(false);

    const [selectedImages, setSelectedImages] = useState<String[] | any>([]);


    useFocusEffect(useCallback(() => {
        const { itemId } = route.params

        try {

            async function init() {
                const novoEquipamento = await getEquipment(itemId)
                if (novoEquipamento) {
                    setSelectedEquipa(novoEquipamento?.type || '');
                    setImage(novoEquipamento?.url[0] || null);
                    setSelectedImages(novoEquipamento?.url || null);
                    setNumero(novoEquipamento?.numero.toString() || '');
                    setImei(novoEquipamento?.serial || '');
                    setLatitude(novoEquipamento?.latitude.toString() || '');
                    setLongitude(novoEquipamento?.longitude.toString() || '');
                    setObservacoes(novoEquipamento?.observations || '');
                    setStatus(novoEquipamento?.status || '')
                    setVerificaImagem(novoEquipamento?.url || null)
                }
            }
            init()

        } catch (err) {
            console.log("Assim não");
            //navigation.navigate('Cadastro')
        }


    }, [equipmente, route.params]))


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


    const handleAtualizar = async () => {
        try {
            setLoaded(true)
            
            if (verficaImage === selectedImages) {
                await putEquipment(itemId, { type: selectedEquipa, numero: numero, serial: imei, latitude: latitude, longitude: longitude, observations: observacoes, url: selectedImages })
                console.log('Equipamento atualizado com sucesso');
            } else {
                let listImagens:any = []
                const imagensList:any = []
               

                verficaImage.forEach((item:string) => {
                    if (!selectedImages.includes(item)) {
                        const nameArquivo = item.split('/')[8];
                        removeFileOne(nameArquivo);    
                    }else{
                        imagensList.push(item)
                    }
                });
                const novosImagem = selectedImages.filter((image:string) => image.startsWith('file:'))

                if(novosImagem.length > 0){
                   listImagens = upload(imei, novosImagem) 
                }

                const list:string[] = listImagens.concat(imagensList)

                console.log(list);
                await putEquipment(itemId, { type: selectedEquipa, numero: numero, serial: imei, latitude: latitude, longitude: longitude, observations: observacoes, url: list })

                // console.log("entrou aqquiiiiii");
                // const nameArquivo = verficaImage.split('/')[8]
                // removeFileOne(nameArquivo).then(async (res) => {
                //     const response = upload(imei, { uri: selectedImages })
                //     await putEquipment(itemId, { type: selectedEquipa, numero: numero, serial: imei, latitude: latitude, longitude: longitude, observations: observacoes, url: response })
                // })
            }
        }
        catch (err) {
            console.error('Erro ao atualizar equipamento:', err);
        }
        finally {
            setLoaded(false)
            navigation.navigate('Equipamentos')
        }
    };
    
    const novosImagem = selectedImages.filter((image:string) => image.startsWith('file:'))
    if(novosImagem.length > 0){
        //listImagens = upload(imei, novosImagem) 
        console.log("oiii");
        
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

    const removeImage = (indexToRemove: number) => {
        const updatedImages = selectedImages.filter((_:any, index:any) => index !== indexToRemove);
        setSelectedImages(updatedImages);
    };

    const handleEquipamentoChange = (equipamento: string) => {
        setSelectedEquipa(equipamento);
    };

    return (
        <View style={styles.containerPrincipal}>
            {loaded && (
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
                <View style={styles.container}>
                    <View style={styles.containerImagem}>
                    {selectedImages.length > 0 && (
                        <Carousel
                        data={selectedImages}
                        renderItem={({ item, index }) => (
                            <View style={styles.image}>
                            <Image source={{ uri: item as string }} style={styles.image} />
                            <TouchableOpacity
                                style={styles.iconDeletar}
                                onPress={() => removeImage(index)}
                            >
                                <Icon name="trash" size={25} color="#fff" />
                            </TouchableOpacity>
                            </View>
                        )}
                        sliderWidth={400}
                        itemWidth={380}
                        keyExtractor={(item, index) => index.toString()}
                        />
                    )}
                    </View>

                    <View style={styles.containerIcons}>
                        <TouchableOpacity style={styles.icons} onPress={pickImage}>
                            <Icon name="plus" size={25} color="#000000" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icons} onPress={() => setCameraVisible(true)}>
                            <Icon name="camera" size={25} color="#000000" />
                        </TouchableOpacity>


                        <Modal
                            visible={isCameraVisible}
                            transparent={true}
                            animationType="slide"
                        >
                            <View style={{ width: "100%", height: " 100%" }}>
                                <View style={styles.modalContainer}>
                                    <Camera type={type} style={styles.camera} ref={camRef}>
                                        <View style={styles.containerButtonCamera}>
                                            <TouchableOpacity onPress={hideCamera} style={styles.icons}>
                                                <FontAwesome name="close" size={30} color="#fff" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.icons} onPress={toggleCameraType}>
                                                <FontAwesome name="exchange" size={30} color="red" />
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.buttonCamera} onPress={takePicture}>
                                                <FontAwesome name="camera" size={30} color="#fff" />
                                            </TouchableOpacity>

                                        </View>

                                    </Camera>

                                </View>
                            </View>
                        </Modal>
                    </View>

                </View>

                <View style={styles.containerInput}>
                    <View style={styles.containerTrans}>
                        <Picker
                            selectedValue={selectedEquipa}
                            onValueChange={handleEquipamentoChange}
                            style={styles.picker}
                        >
                            <Picker.Item label="Equipamento" value="" enabled={false} />
                            <Picker.Item label="Transformador" value="Transformador" />
                            <Picker.Item label="Poste" value="Poste" />
                            <Picker.Item label="Bomba hidráulica" value="Bomba hidráulica" />
                        </Picker>


                        <TextInput
                            placeholder="Número"
                            keyboardType="numeric"
                            style={styles.input}
                            defaultValue={numero}
                            onChangeText={(text) => setNumero(text)}
                        />

                    </View>

                    <TextInput
                        placeholder="IMEI"
                        style={styles.inputInteiro}
                        defaultValue={imei}
                        onChangeText={(text) => setImei(text)}
                    />


                    <View style={styles.containerLoLa}>
                        <Text style={styles.textFont}>Latitude:</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Latitude"
                            style={styles.inputLoLa}
                            defaultValue={latitude}
                            onChangeText={(text) => setLatitude(text)}
                        />

                        <Text style={styles.textFont}>Longitude:</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Longitude"
                            style={styles.inputLoLa}
                            defaultValue={longitude}
                            onChangeText={(text) => setLongitude(text)}
                        />

                    </View>

                    <TextInput
                        placeholder="Observações"
                        style={styles.inputInteiro}
                        defaultValue={observacoes}
                        onChangeText={(text) => setObservacoes(text)}
                    />

                </View>


                <View style={styles.containerBotao}>

                    <BotoesDetalhes
                        text={status === true ? "Desativar" : "Ativar"}
                        style={[
                            styles.botaoAtivar,
                            { backgroundColor: status === true ? 'rgb(174, 59, 59)' : 'rgb(96, 145, 193)' }
                        ]}
                        label={(status === true ? "Desativar" : "Ativar") + " Equipamento"}
                        id={itemId}
                        status={status}
                    />

                    <BotaoAtualizar handle={handleAtualizar} />
                </View>

            </ScrollView>
        </View>
    );
}