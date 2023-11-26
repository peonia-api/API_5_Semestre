import React, { useState, useEffect, useRef, useCallback, useContext } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert, Modal } from "react-native";
import styles from "./style";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { BotaoCadastro } from "../Botao";
import { upload } from '../../supabase/upload';
import { useContextUser, useContextoEquipmente, useTheme } from '../../hooks';
import LottieView from 'lottie-react-native';
import { Camera, CameraType } from 'expo-camera';
import { FontAwesome } from "@expo/vector-icons"
import { useFocusEffect } from "@react-navigation/native";
import Carousel from 'react-native-snap-carousel';
import { Create } from "../../controllers";
import { useNetInfo } from "@react-native-community/netinfo";


Icon.loadFont();

export default function Cadastro({ route, navigation }: any) {
  const [selectedEquipa, setSelectedEquipa] = useState<string>('');
  const [image, setImage] = useState<any>(null);
  const [uploading, setUploading] = useState(false); // Estado para controlar o envio
  const { createEquipment, get10, setEquipmente } = useContextoEquipmente();

  const [selectedImages, setSelectedImages] = useState<String[] | any>([]);

  const [numero, setNumero] = useState<number | null>(null);
  const [serial, setSerial] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [observacao, setObservacao] = useState<string | null>(null);

  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const camRef = useRef<any | null>(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [isCameraVisible, setCameraVisible] = useState(false);
  const theme = useTheme()
  const { typeCor, typeCorMoon } = useContextUser()
  const { isInternetReachable } = useNetInfo()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useFocusEffect(useCallback(() => {


    try {
      Create.create()
      let { newEquipment } = route.params
      setLatitude(newEquipment.latitude)
      setLongitude(newEquipment.longitude)
      newEquipment = null
    } catch (err) {
      console.log("Assim não");
    }
  }, [route.params]))

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

  const clearFields = () => {
    setSelectedEquipa('');
    setImage(null);
    setNumero(null);
    setSerial(null);
    setLatitude(null);
    setLongitude(null);
    setObservacao(null);
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        // allowsEditing: true,
        allowsMultipleSelection: true, // Para permitir a seleção de várias imagens
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        const uris = result.assets.map((asset) => asset.uri);
        setSelectedImages([...selectedImages, ...uris]);
      }
    } else {
      Alert.alert(
        'Permissão negada',
        'Você precisa permitir o acesso à galeria de imagens para adicionar uma imagem.'
      );
    }
  };

  const removeImage = (indexToRemove: number) => {
    const updatedImages = selectedImages.filter((_:any, index:any) => index !== indexToRemove);
    setSelectedImages(updatedImages);
  };

  const handleEquipamentoChange = (equipamento: string) => {
    setSelectedEquipa(equipamento);
  };


  const validateLatitude = (value: string | null) => {
    const regex = /^-?\d{2,3}.\d{3,}$/; // Padrão xx.xxxx ou xxx.xxxxx
    if (!value) {
      Alert.alert("Campo obrigatório", "Digite uma latitude" );
      return false;
    }
    const latiValue = value.replace(',', '.');
    if (!regex.test(latiValue)) {
      Alert.alert("Formato inválido", "Digite uma latitude válida no formato xx.xxxx ou xxx.xxxxx.");
      return false;
    }
    return true;
  };

  const validateLongitude = (value: string | null) => {
    const regex = /^-?\d{2,3}.\d{3,}$/; // Padrão xx.xxxx ou xxx.xxxxx
    if (!value) {
      Alert.alert("Campo obrigatório", "Digite uma logitude");
      return false;
    }
    const longiValue = value.replace(',', '.');
    if (!regex.test(longiValue)) {
      Alert.alert("Formato inválido", "Digite uma longitude válida no formato xx.xxxx ou xxx.xxxxx.");
      return false;
    }
    return true;
  };


  const uploadImage = async () => {
    if (selectedImages.length === 0) {
      Alert.alert("Campo obrigatório", "Selecione uma Imagem.");
      return;
    }

    if (!selectedEquipa) {
      Alert.alert("Campo obrigatório", "Selecione um tipo de equipamento.");
      return;
    }

    if (!numero || isNaN(numero)) {
      Alert.alert("Campo obrigatório", "Número deve ser um número válido.");
      return;
    }

    if (!serial) {
      Alert.alert("Campo obrigatório", "IMEI é obrigatório.");
      return;
    }

    if (!validateLatitude(latitude !== null ? latitude.toString() : null)) {
      return;
    }

    if (!validateLongitude(longitude !== null ? longitude.toString() : null)) {
      return;
    }

    if (!observacao) {
      Alert.alert("Campo obrigatório", "Observação deve ser válido.");
      return;
    }

    if (uploading) {
      return;
    }

    setUploading(true);
    console.log(selectedImages);

    try {
      console.log("Tem: ",isInternetReachable);
      
      if(isInternetReachable === true){
        console.log("sdsdsadsadsadasds");
        
        const response = await upload(serial, selectedImages);
        await createEquipment({
          type: selectedEquipa,
          numero: numero,
          serial: serial,
          latitude: latitude,
          longitude: longitude,
          observations: observacao,
          url: response,
          status: true
        });
      }else{
        Create.insert({
          type: selectedEquipa,
          numero: numero,
          serial: serial,
          latitude: latitude,
          longitude: longitude,
          observations: observacao,
          url: selectedImages,
          status: true
        })
        setEquipmente((prevEquipmente:any) => [...prevEquipmente, {
          type: selectedEquipa,
          numero: numero,
          serial: serial,
          latitude: latitude,
          longitude: longitude,
          observations: observacao,
          url: selectedImages,
          status: true
        }]);
      }
      
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao enviar os dados para o banco.");
    } finally {
      if(isInternetReachable === true){
        await get10()
      }
      clearFields();
      setUploading(false);
      navigation.navigate('Equipamentos');
    }
  }

  console.log(selectedImages);

  return (
    <View style={[styles.containerPrincipal, { backgroundColor: typeCorMoon[0] }]}>
      <ScrollView>
        <View style={styles.container}>
        <View style={[styles.containerImagem, {borderColor: typeCor[1]}]}>
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
            <TouchableOpacity style={[styles.icons, {backgroundColor: typeCor[1]}]} onPress={pickImage}>
              <Icon name="plus" size={25} color="#000000" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.icons, {backgroundColor: typeCor[1]}]} onPress={() => setCameraVisible(true)}>
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
                  style={[styles.picker]}
                >
                  <Picker.Item label="Equipamento" value="" enabled={false} />
                  <Picker.Item label="Transformador" value="Transformador" />
                  <Picker.Item label="Poste" value="Poste" />
                  <Picker.Item label="Bomba hidráulica" value="Bomba hidráulica" />
                </Picker>
            <TextInput
              placeholder="Número"
              keyboardType="numeric"
              style={[styles.input, {borderColor: typeCor[1]}]}
              onChangeText={(e: any) => setNumero(e)}
              value={numero !== null ? numero.toString() : ''}
            />
          </View>

          <TextInput
            placeholder="IMEI"
            style={[styles.inputInteiro, {borderColor: typeCor[1]}]}
            onChangeText={(e: any) => setSerial(e)}
            value={serial || ''}
          />

          <View style={[styles.containerLoLa]}>
            <TextInput
              placeholder="Latitude"
              keyboardType="numeric"
              style={[styles.inputLoLa, {borderColor: typeCor[1]}]}
              onChangeText={(e: any) => setLatitude(e)}
              value={latitude !== null ? latitude.toString() : ''}
            />
            <TextInput
              placeholder="Longitude"
              keyboardType="numeric"
              style={[styles.inputLoLa, {borderColor: typeCor[1]}]}
              onChangeText={(e: any) => setLongitude(e)}
              value={longitude !== null ? longitude.toString() : ''}
            />
          </View>

          <TextInput
            placeholder="Observações"
            style={[styles.inputInteiro, {borderColor: typeCor[1]}]}
            onChangeText={(e: any) => setObservacao(e)}
            value={observacao || ''}
          />
        </View>

        <View style={styles.containerBotao}>
          <BotaoCadastro handle={uploadImage} />
        </View>


        {uploading && (
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
      </ScrollView>
    </View>
  );
}