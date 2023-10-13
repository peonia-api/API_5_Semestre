import React, { useState } from "react";
import { View, Image, TextInput, ScrollView, Alert } from "react-native";
import styles from "./style";
import { BotaoCadastroUsuario } from "../Botao";
import { useContextUser } from "../../hooks";

export default function CadastroUsuario({navigation}: any) {
    
    const { createUser } = useContextUser();

    const [userName, setUserName] = useState<string | null>(null);
    //const [sobrenome, setSobrenome] = useState<string | null>(null);
    //const [cpf, setCpf] = useState<number | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    //const [telefone, setTelefone] = useState<number | null>(null);
    //const [matricula, setMatricula] = useState<string | null>(null);
    const [userPassword, setUserPassword] = useState<string | null>(null);

    const clearFields = () => {
        setUserName(null);
        //setSobrenome(null);
        //setCpf(null);
        setUserEmail(null);
        //setTelefone(null);
        //setMatricula(null);
        setUserPassword(null);
    }

    const register = async () => {
        if(!userName) {
            Alert.alert("Campo obrigatório", "Nome é obrigatório.")
        }

        // if(!sobrenome) {
        //     Alert.alert("Campo obrigatório", "Sobrenome é obrigatório.")
        // }

        // if(!cpf) {
        //     Alert.alert("Campo obrigatório", "CPF é obrigatório.")
        // }

        if(!userEmail) {
            Alert.alert("Campo obrigatório", "E-mail é obrigatório.")
        }

        // if(!telefone) {
        //     Alert.alert("Campo obrigatório", "Telefone é obrigatório.")
        // }

        // if(!matricula) {
        //     Alert.alert("Campo obrigatório", "Matrícula é obrigatório.")
        // }

        if(!userPassword) {
            Alert.alert("Campo obrigatório", "Senha é obrigatório.")
        }

        try{
            await createUser({
                userName: userName,
                // sobrenome: sobrenome,
                // cpf: cpf,
                userEmail: userEmail,
                // telefone: telefone,
                // matricula: matricula,
                userPassword: userPassword
            })
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
                            placeholder="Nome"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                            onChangeText={(e: any) => setUserName(e)}
                        />
                    </View>
                    {/* <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="SOBRENOME"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" // Defina a cor do placeholder
                            onChangeText={(e: any) => (e)}
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
                    </View> */}
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-mail"
                            autoCapitalize="none"
                            style={styles.inputLogin}
                            placeholderTextColor="#000000"
                            onChangeText={(e: any) => setUserEmail(e)}
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            style={styles.inputLogin}
                            placeholderTextColor="#000000" 
                            onChangeText={(e: any) => setUserPassword(e)}
                        />
                    </View>
                    {/* <View style={styles.inputWrapper}>
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
                    </View> */}
                </View>
                <BotaoCadastroUsuario handle={register} />
            </ScrollView>
        </View>
    );
}
