import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import styles from "./style";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { BotoesDetalhes } from "../Botao";

Icon.loadFont();

export default function Detalhe() {
    const [selectedEquipa, setSelectedEquipa] = useState<string>('');
    const [image, setImage] = useState<any>(null);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } else {
            Alert.alert("Permissão negada", "Você precisa permitir o acesso à galeria de imagens para adicionar uma imagem.");
        }
    };

    const removeImage = () => {
        setImage(null);
    };

    const handleEquipamentoChange = (equipamento: string) => {
        setSelectedEquipa(equipamento);
    };

    return (
        <View style={styles.containerPrincipal}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerImagem} >
                        {image && <Image source={{ uri: image }} style={styles.image} />}
                        {/* <Image source={require('../../assets/iconImage.png')} style={styles.image}  /> */}
                    </View>

                    <View style={styles.containerIcons}>
                        <TouchableOpacity style={styles.iconsPlusMinus} onPress={pickImage}>
                            <Icon name="plus" size={25} color="#000000" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.iconsPlusMinus} onPress={pickImage}>
                            <Icon name="camera" size={25} color="#000000" />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={styles.iconsPlusMinus} onPress={removeImage}>
                            <Icon name="trash" size={25} color="#000000" />
                        </TouchableOpacity>
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
                        <TextInput placeholder="Número" style={styles.input} />
                    </View>

                    <TextInput placeholder="IMEI" style={styles.inputInteiro} />

                    <View style={styles.containerLoLa}>
                        <Text style={styles.textFont}>Latitude:</Text>
                        <TextInput placeholder="Latitude" style={styles.inputLoLa} />

                        <Text style={styles.textFont}>Longitude:</Text>
                        <TextInput placeholder="Longitude" style={styles.inputLoLa} />
                    </View>

                    <TextInput placeholder="Observações" style={styles.inputInteiro} />
                </View>

                <View style={styles.containerBotao}>
                    <BotoesDetalhes
                        text="Ativar"
                        style={styles.botaoAtivar}
                        label="Ativar Equipamento"
                        message="ativado"
                    />
                    <BotoesDetalhes
                        text="Desativar"
                        style={styles.botaoDesativar}
                        label="Desativar Equipamento"
                        message="desativado"
                    />
                </View>
            </ScrollView>
        </View>
    );
}


