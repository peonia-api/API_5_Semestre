import React from "react";
import { ScrollView, TextInput, View, Image } from "react-native";
import styles from "./style";
import { BotaoAtualizarUsuario } from "../Botao";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text } from "react-native";

export default function Perfil() {
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/baseline_arrow_back_24.png')}
            fadeDuration={0}
            style={{ width: 25, height: 25, marginLeft: 10, marginTop: 10 }}
            // onPress={() => navigation.navigate('ListaEquipamento')}
            />
            <ScrollView>
                <View style={styles.imageCenter}>
                    <Image source={require('../../assets/iconPeople.png')} style={styles.imageSize} />
                </View>
                <View>
                    <View style={styles.inputWrapper}>
                        {/* <Text>{users.userName}</Text> */}
                        <TextInput
                            placeholder="NOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="SOBRENOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        {/* <Text>{users.userEmail}</Text> */}
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                        />
                    </View>
                </View>
                <BotaoAtualizarUsuario/>
            </ScrollView>
        </View>
    )
}