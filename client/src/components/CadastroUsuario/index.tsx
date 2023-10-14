import React, { useRef, useState } from "react";
import { View, Image, TextInput, ScrollView, Alert, TouchableOpacity, Button, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import { uploadIcone } from '../../supabase/upload';
import styles from "./style";
import { BotaoCadastroUsuario } from "../Botao";
import { useContextUser } from "../../hooks";

export default function CadastroUsuario({ navigation }: any) {

    const { createUser } = useContextUser();

    const [showPassword, setShowPassword] = useState(false);

    const [image, setImage] = useState<any>(null);
    const [uploading, setUploading] = useState(false); // Estado para controlar o envio

    const [userName, setUserName] = useState<string | null>(null);
    const [userCpf, setUserCpf] = useState<string | null | any>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userTelefone, setUserTelefone] = useState<string | null>(null);
    const [userMatricula, setUserMatricula] = useState<string | null>(null);
    const [userPassword, setUserPassword] = useState<string | null | any>(null);

    const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
    const passwordInputRef = useRef(null);

    const togglePasswordRequirements = () => {
        setShowPasswordRequirements(!showPasswordRequirements);
    };
    
    const hidePasswordRequirements = () => {
        setShowPasswordRequirements(false);
    };

    const isPasswordValid = (password: string) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{10,20}$/;
        return passwordPattern.test(password);
    };

    const clearFields = () => {
        setUserName(null);
        setUserCpf(null);
        setUserEmail(null);
        setUserTelefone(null);
        setUserMatricula(null);
        setUserPassword(null);
    }

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status === 'granted') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [2, 2],
                quality: 1,
            });

            if (!result.canceled) {
                setImage(result.assets[0].uri);
            }
        } else {
            Alert.alert("Permissão negada", "Você precisa permitir o acesso à galeria de imagens para adicionar uma imagem.");
        }
    };

    const register = async () => {
        if (!image) {
            Alert.alert("Campo obrigatório", "Selecione uma Imagem.");
            return;
        }

        if (!userName) {
            Alert.alert("Campo obrigatório", "Nome é obrigatório.")
        }

        if (!userCpf) {
            Alert.alert("Campo obrigatório", "userCpf é obrigatório.")
        }

        if (!userEmail) {
            Alert.alert("Campo obrigatório", "E-mail é obrigatório.")
        }

        if (!userTelefone) {
            Alert.alert("Campo obrigatório", "userTelefone é obrigatório.")
        }

        if (!userMatricula) {
            Alert.alert("Campo obrigatório", "Matrícula é obrigatório.")
        }

        if (!isPasswordValid(userPassword)) {
            Alert.alert("Senha inválida", "A senha deve conter pelo menos uma letra maiúscula, um número, um caracter especial e ter no minímo 10 e máximo 20 dígitos.");
            return;
        }

        if (uploading) {
            return;
        }

        setUploading(true)

        try {
            const response = await uploadIcone(userCpf, { uri: image });
            await createUser({
                userName: userName,
                userCpf: userCpf,
                userEmail: userEmail,
                userTelefone: userTelefone,
                userMatricula: userMatricula,
                userPassword: userPassword,
                icone: response,
                userType: 2
            }).then(() => {
                Alert.alert("Cadastro feito com sucesso");
                navigation.navigate('Login');
            }).catch(() => {
                Alert.alert("Cadastro não realizado");
            })
        } catch (error) {
            console.log(error);
            Alert.alert("Erro", "Ocorreu um erro ao enviar os dados para o banco.");
        } finally {
            clearFields();
            setUploading(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={hidePasswordRequirements}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.containerImagem}>
                        {image && <Image source={{ uri: image }} style={styles.image} />}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.icon} onPress={pickImage}>
                            <Icon name="plus" size={25} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="NOME COMPLETO"
                                style={styles.inputLogin}
                                placeholderTextColor="#000000"
                                onChangeText={(e: any) => setUserName(e)}
                                value={userName || ''}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="CPF"
                                keyboardType="numeric"
                                style={styles.inputLogin}
                                placeholderTextColor="#000000" // Defina a cor do placeholder
                                onChangeText={(e: any) => setUserCpf(e)}
                                value={userCpf || ''}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="E-MAIL"
                                autoCapitalize="none"
                                style={styles.inputLogin}
                                placeholderTextColor="#000000"
                                onChangeText={(e: any) => setUserEmail(e)}
                                value={userEmail || ''}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                ref={passwordInputRef}
                                placeholder="SENHA"
                                autoCapitalize="none"
                                secureTextEntry={!showPassword}
                                style={styles.inputLogin}
                                placeholderTextColor="#000000"
                                onChangeText={(e) => setUserPassword(e)}
                                value={userPassword || ''}
                                onFocus={togglePasswordRequirements} // Mostrar requisitos quando o campo é focado
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Icon
                                    name={showPassword ? 'eye' : 'eye-slash'}
                                    size={20}
                                    color="#000"
                                    style={styles.iconPassword}
                                />
                            </TouchableOpacity>
                        </View>
                        {showPasswordRequirements && (
                            <View style={styles.textPassword}>
                                <Text>Requisitos da senha:</Text>
                                <Text>- Pelo menos 1 letra maiúscula;</Text>
                                <Text>- Pelo menos 1 número;</Text>
                                <Text>- Pelo menos 1 caractere especial;</Text>
                                <Text>- No minímo 10 e máximo 20 dígitos</Text>
                            </View>
                        )}
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="TELEFONE"
                                keyboardType="numeric"
                                style={styles.inputLogin}
                                placeholderTextColor="#000000" // Defina a cor do placeholder
                                onChangeText={(e: any) => setUserTelefone(e)}
                                value={userTelefone || ''}
                            />
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                placeholder="MATRÍCULA"
                                style={styles.inputLogin}
                                placeholderTextColor="#000000" // Defina a cor do placeholder
                                onChangeText={(e: any) => setUserMatricula(e)}
                                value={userMatricula || ''}
                            />
                        </View>
                    </View>
                    <BotaoCadastroUsuario handle={register} />
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}
