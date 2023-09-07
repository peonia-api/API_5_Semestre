import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./style";

export default function Footer() {
    return (
        <View>
            <View style={styles.linhaPontilhada} />
            <View style={styles.container}>
                <TouchableOpacity
                    style={[styles.botao]}>
                    <Text style={styles.textoBotao}>Cadastrar Equipamento</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
