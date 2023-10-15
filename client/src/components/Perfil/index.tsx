import React, { useState, useEffect } from "react";
import { ScrollView, TextInput, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { Button } from "../button";
import Storage from 'expo-storage';
import { User } from "../../services";

export default function Perfil({ navigation }: any) {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userMatricula, setUserMatricula] = useState("");
    const [userTelefone, setUserTelefone] = useState("");
    const [userId, setUserId] = useState("");


    useEffect(() => {
        async function fetchData() {
            try {
                const userEmail = await Storage.getItem({ key: 'userEmail' }) ?? "";
                const userName = await Storage.getItem({ key: 'userName' }) ?? "";
                const userCpf = await Storage.getItem({ key: 'userCpf' }) ?? "";
                const userMatricula = await Storage.getItem({ key: 'userMatricula' }) ?? "";
                const userTelefone = await Storage.getItem({ key: 'userTelefone' }) ?? "";
                const userId = await Storage.getItem({ key: 'id' }) ?? "";
                console.log("reerrer" + userId);
                setUserName(userName);
                setUserEmail(userEmail);
                setUserCpf(userCpf);
                setUserMatricula(userMatricula);
                setUserTelefone(userTelefone);
                setUserId(userId);
     
            } catch (error) {
                alert("Erro ao obter dados do armazenamento!");
            }
        }

        fetchData();
    }, []);

    // const handleAtualiza = async () => {
    //     try {
    //         const updatedProfile = await User.putProfile(userId, {
    //             userName: userName,
    //             userEmail: userEmail,
    //             userCpf: userCpf,
    //             userMatricula: userMatricula,
    //             userTelefone: userTelefone
    //         });

    //         alert("Perfil atualizado com sucesso!");
    //     } catch (error) {
    //         console.error("Erro ao atualizar perfil:", error);
    //         alert("Erro ao atualizar perfil. Tente novamente mais tarde.");
    //     }
    // };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Equipamentos')}
                style={styles.returnImage}
            >
                <Image
                    source={require('../../assets/baseline_arrow_back_24.png')}
                    fadeDuration={0}
                    style={styles.returnImage}
                />
            </TouchableOpacity>
            <ScrollView>
                <View style={styles.imageCenter}>
                    <Image source={require('../../assets/iconPeople.png')} style={styles.imageSize} />
                </View>
                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Nome completo"
                            style={styles.inputLogin}
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            style={styles.inputLogin}
                            value={userCpf}
                            onChangeText={(text) => setUserCpf(text)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-mail"
                            style={styles.inputLogin}
                            value={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Senha"
                            style={styles.inputLogin}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Telefone"
                            style={styles.inputLogin}
                            value={userTelefone}
                            onChangeText={(text) => setUserTelefone(text)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Matrícula"
                            style={styles.inputLogin}
                            value={userMatricula}
                            onChangeText={(text) => setUserMatricula(text)}
                        />
                    </View>
                </View>

                <Button
                    styles={styles.BotaoVerificaCodigo}
                    stylesText={styles.textoBotao}
                    // onPress={handleAtualiza}
                    texto={'Atualizar Perfil'}
                />

            </ScrollView>
        </View>
    );
}
