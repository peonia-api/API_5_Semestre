import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import NavBar from "../NavBar";
import styles from "./style";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";



export default function Cadastro() {
    const [selectedEquipa, setSelectedEquipa] = useState<string>(''); 

    const handleEquipamentoChange = (equipamento: string) => {
        setSelectedEquipa(equipamento);
    };

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.containerImagem}>
                    <Image source={require('../../assets/iconImage.png')} style={styles.image} />
                </View>
                <View style={styles.containerIcons}>
                    <Image source={require('../../assets/iconPlus.png')} />
                    <Image source={require('../../assets/iconMinus.png')} />
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
                    <TextInput placeholder="Logitude" style={styles.inputLoLa} />
                </View>

                <TextInput placeholder="Observação" style={styles.inputInteiro} />
            </View>
            <View style={styles.containerBotao}>
                <View style={styles.linhaPontilhada} />
                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


