import React from "react";
import { ScrollView, TextInput, View, Image } from "react-native";
import styles from "./style";
import { BotaoAtualizarUsuario } from "../Botao";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Perfil() {
    return(
        <View style={styles.container}>
            <Icon name="user" size={25} color="#000000" />
            <ScrollView>
                <View style={styles.imageCenter}>
                    <Image source={require('../../assets/iconPeople.png')} style={styles.imageSize} />
                </View>
                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="NOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="SOBRENOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                        />
                    </View>
                </View>
                <BotaoAtualizarUsuario/>
            </ScrollView>
        </View>
    )
}