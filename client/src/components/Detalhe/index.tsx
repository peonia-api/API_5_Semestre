import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import NavBar from "../NavBar";
import styles from "./style";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function Detalhe() {
    const [selectedEquipa, setSelectedEquipa] = useState<string>('');

    const handleEquipamentoChange = (equipamento: string) => {
        setSelectedEquipa(equipamento);
    };

    return (
        <View style={styles.containerPrincipal}>
            <View style={styles.container}>
                <View style={styles.containerImagem}>
                    <Image source={require('../../assets/iconImage.png')} style={styles.image} />
                </View>

                <View style={styles.containerIcons}>
                    <TouchableOpacity style={styles.iconsPlusMinus}>
                        <Icon name="plus" size={25} color="#000000" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconsPlusMinus}>
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


