import React from "react";
import { View, Image, TextInput, ScrollView } from "react-native";
import styles from "./style";
import { BotaoCadastro, BotaoCadastroUsuario } from "../Botao";

export default function CadastroUsuario() {
    return (
        <View style={styles.container}>
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
                <BotaoCadastroUsuario />
            </ScrollView>
        </View>
    );
}
