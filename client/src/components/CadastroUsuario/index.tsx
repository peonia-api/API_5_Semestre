import React, { useState } from "react";
import { View, Image, TextInput, ScrollView, Alert } from "react-native";
import styles from "./style";
import { BotaoCadastroUsuario } from "../Botao";

export default function CadastroUsuario({navigation}: any) {
    
    const [nome, setNome] = useState<string | null>(null);
    const [sobrenome, setSobrenome] = useState<string | null>(null);
    const [cpf, setCpf] = useState<number | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [telefone, setTelefone] = useState<number | null>(null);
    const [matricula, setMatricula] = useState<string | null>(null);

    const clearFields = () => {
        setNome(null);
        setSobrenome(null);
        setCpf(null);
        setEmail(null);
        setTelefone(null);
        setMatricula(null);
    }

    const register = async () => {
        if(!nome) {
            Alert.alert("Campo obrigatório", "Nome é obrigatório.")
        }

        if(!sobrenome) {
            Alert.alert("Campo obrigatório", "Sobrenome é obrigatório.")
        }

        if(!cpf) {
            Alert.alert("Campo obrigatório", "CPF é obrigatório.")
        }

        if(!email) {
            Alert.alert("Campo obrigatório", "Email é obrigatório.")
        }

        if(!telefone) {
            Alert.alert("Campo obrigatório", "Telefone é obrigatório.")
        }

        if(!matricula) {
            Alert.alert("Campo obrigatório", "Matrícula é obrigatório.")
        }

        try{

        } catch(error) {
            console.log(error);
            Alert.alert("Erro", "Ocorreu um erro ao enviar os dados para o banco.");
        } finally {
            clearFields();
            navigation.navigate('Login');
        }
    }

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
                            onChangeText={(e: any) => setNome(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="SOBRENOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => setSobrenome(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            keyboardType="numeric"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => setCpf(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => setEmail(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            keyboardType="numeric"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => setTelefone(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => setMatricula(e)}
                        />
                    </View>
                </View>
                <BotaoCadastroUsuario handle={register} />
            </ScrollView>
        </View>
    );
}
