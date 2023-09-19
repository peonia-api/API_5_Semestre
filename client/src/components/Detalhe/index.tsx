import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import NavBar from "../NavBar";
import styles from "./style";
import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

Icon.loadFont();

export default function Detalhe() {
    const [selectedEquipa, setSelectedEquipa] = useState<string>('');

    const [image, setImage] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        //esta com erro porém não interfere, parece que é um bug do vs code. Não há nada para se preocupar, relaxa
        if (!result.canceled) {
            setImage(result.assets[0].uri);
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
            <View style={styles.container}>
                <View style={styles.containerImagem} >
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    {/* <Image source={require('../../assets/iconImage.png')} style={styles.image}  /> */}
                </View>

                <View style={styles.containerIcons}>
                    <TouchableOpacity style={styles.iconsPlusMinus} onPress={pickImage}>
                        <Icon name="plus" size={25} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconsPlusMinus} onPress={removeImage}>
                        <Icon name="minus" size={25} color="#000000" />
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
                        <Picker.Item label="Equipamento" value="" />
                        <Picker.Item label="TRANSFORMADOR" value="TRANSFORMADOR" />
                        <Picker.Item label="POSTE" value="POSTE" />
                        <Picker.Item label="BOMBA HIDRÁULICA" value="BOMBA HIDRÁULICA" />
                    </Picker>
                    <TextInput placeholder="Número" style={styles.input} />
                </View>

                <TextInput placeholder="IMEI" style={styles.inputInteiro} />

                <View style={styles.container}>
                    <Text style={styles.textFont}>LATITUDE:</Text>
                    <TextInput placeholder="Latitude" style={styles.inputLoLa} />

                    <Text style={styles.textFont}>LONGITUDE:</Text>
                    <TextInput placeholder="Longitude" style={styles.inputLoLa} />
                </View>

                <TextInput placeholder="Observação" style={styles.inputInteiro} />
            </View>

            <View style={styles.linhaPontilhada} />
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botaoDesativar}>
                    <Text style={styles.textoBotao}>DESATIVAR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoAtivar}>
                    <Text style={styles.textoBotao}>ATIVAR</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


