import React, { useState, useEffect, useContext } from "react";
import { ScrollView, TextInput, View, Image, TouchableOpacity, Alert, Modal, Text} from "react-native";
import styles from "./style";
import { Button } from "../button";
import Storage from 'expo-storage';
import * as ImagePicker from 'expo-image-picker';
import { User } from "../../services";
import Icon from 'react-native-vector-icons/FontAwesome';
import { uploadIcone } from "../../supabase/upload";
import { useContextUser, useContextoEquipmente } from "../../hooks";
import LottieView from 'lottie-react-native';
import { InputPassword } from "../Input";
import { AuthContext } from "../../contexts";
import { useNetInfo } from "@react-native-community/netinfo";

export default function Perfil({ navigation }: any) {
    const [userName, setUserName] = useState <string> ("");
    const [userEmail, setUserEmail] = useState <any>("");
    const [userCpf, setUserCpf] = useState <string>("");
    const [userMatricula, setUserMatricula] = useState <string>("");
    const [userTelefone, setUserTelefone] = useState <string>("");
    const [userId, setUserId] = useState <string>("");
    const [image, setImage] = useState<any>(null);
    const [verficaImage, setVerificaImagem] = useState<any>()
    const [ isVisible, setIsVisible ] = useState<boolean>(false)
    const { setLoaded, loaded} = useContextoEquipmente();
    const { logout, setTypeCor, typeCor } = useContextUser()
    const { typeCorMoon } = useContext(AuthContext);

    const [senhaInserida, setSenhaInserida] = useState("");
    const [senhaInseridaVerifica, setSenhaInseridaVerifica] = useState("");
    const [showPasswordRequirements, setShowPasswordRequirements] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { isInternetReachable } = useNetInfo()

    const isPasswordValid = (password: string) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])[A-Za-z\d@#$%^&+=!]{10,20}$/;
        return passwordPattern.test(password);
    };
  
    
    const handleAlterarSenha = async () => {
    try {
        if (!isPasswordValid(senhaInserida)) {
            Alert.alert("Senha inválida", "A senha deve conter pelo menos uma letra maiúscula, um número, um caractere especial e ter no minímo 10 e máximo 20 dígitos.");
            setShowPasswordRequirements(true)
            return;
        }
        let userEmail = await Storage.getItem({ key: 'email' }) ?? "";
        userEmail = userEmail.replace(/[" ]/g, "");
        if (senhaInserida === senhaInseridaVerifica) {
            await User.patchPassword({ userEmail, userPassword: senhaInserida }).then(() => {
                alert("Senha Alterada!");
                logout()
            }).catch((error) => {
            alert("Erro ao alterar senha");
            });
        } else {
            alert("A nova senha e confirmar senha devem ser iguais!");
        }
    } catch (error) {
      alert("Email ou código incorreto!");
    }
    };
    useEffect(() => {
        async function fetchData() {
            setLoaded(true)
            try {
                const icone = await Storage.getItem({ key: 'icone' }) ?? "";
                const userEmail = await Storage.getItem({ key: 'userEmail' }) ?? "";
                const userName = await Storage.getItem({ key: 'userName' }) ?? "";
                const userCpf = await Storage.getItem({ key: 'userCpf' }) ?? "";
                const userMatricula = await Storage.getItem({ key: 'userMatricula' }) ?? "";
                const userTelefone = await Storage.getItem({ key: 'userTelefone' }) ?? "";
                const userId = await Storage.getItem({ key: 'userid' }) ?? "";
                console.log(userId);
                setImage(icone);
                setUserName(userName);
                setUserEmail(userEmail);
                setUserCpf(userCpf);
                setUserMatricula(userMatricula);
                setUserTelefone(userTelefone);
                setUserId(userId);
                setVerificaImagem(icone)
     
            } catch (error) {
                alert("Erro ao obter dados do armazenamento!");
            }finally{
                setLoaded(false)
            }
        }

        fetchData();
    }, []);

    const handleAtualiza = async () => {
        if(isInternetReachable === true){
            try {
                setLoaded(true)
                if(image === verficaImage){
                    await User.putProfile(userEmail, {
                        userCpf: userCpf,
                        userMatricula: userMatricula,
                        userTelefone: userTelefone,
                        userName: userName,
                        userEmail: userEmail,
                        icone: image
                    }).then((res) => {
                        console.log(alert("Perfil atualizado com sucesso!"))
                        Storage.setItem({key: 'userEmail', value: userEmail})
                        Storage.setItem({key: "userName", value: userName})
                        Storage.setItem({key: "userCpf", value: userCpf})
                        Storage.setItem({key: "userMatricula", value: userMatricula})
                        Storage.setItem({key: "userTelefone", value: userTelefone})
                    })
                    .catch((err) => Alert.alert("Erro", "Erro ao atualizar!"))
                }else{                
                    const response:any = await uploadIcone(userCpf, { uri: image })
                    console.log(response);
                    
                    await User.putProfile(userEmail, {
                        userCpf: userCpf,
                        userMatricula: userMatricula,
                        userTelefone: userTelefone,
                        userName: userName,
                        userEmail: userEmail,
                        icone: (response)
                    }).then((res) => {
                        console.log(alert("Perfil atualizado com sucesso!"))
                        Storage.setItem({key: 'userEmail', value: userEmail})
                        Storage.setItem({key: "userName", value: userName})
                        Storage.setItem({key: "userCpf", value: userCpf})
                        Storage.setItem({key: "userMatricula", value: userMatricula})
                        Storage.setItem({key: "userTelefone", value: userTelefone})
                        Storage.setItem({key: "icone", value: response})
                    })
                    .catch((err) => Alert.alert("Erro", "Erro ao atualizar!"))
                }
            }catch (error) {
                console.log("Erro ao atualizar");     
            }finally{
                setLoaded(false)
            }
        }else{
            Alert.alert(
                "Sem Conexão",
                "Não identificamos conexão com a internet, dessa forma não é possível realizar a atualização.",
                [
                  { text: "OK", style: "cancel" }
                ],
                { cancelable: false }
              );
        }
    };

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

    const toggleModal = () =>{
        setIsVisible(!isVisible)
    }




    return (
        <View style={[styles.container, {backgroundColor: typeCorMoon[0]}]}>
            {loaded && (
                <View style={[styles.uploadingAnimation, {backgroundColor: typeCorMoon[0]}]}>
                <LottieView
                    autoPlay={true}
                    loop={true}
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    source={require('../../assets/carregando.json')}
                />
                </View>
            )}

            {/* 
            
                    Começa aqui!!!
            */}

            <Modal
              visible={isVisible}
              transparent={true}
              animationType="slide"
            >
              
                <View style={styles.container}>
                    <TouchableOpacity>
                    <Text  style={styles.fechaModal} onPress={toggleModal}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.inputWrapper}>
                        <InputPassword style={styles.inputEmail} show={showPassword} setPassword={setSenhaInserida} placeholder={"NOVA SENHA"}/>
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye' : 'eye-slash'}
                                size={20}
                                color="#000"
                                style={styles.iconPassword}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputWrapper}>
                        <InputPassword style={styles.inputEmail} show={showPassword} setPassword={setSenhaInseridaVerifica} placeholder={"CONFIRMAR SENHA"}/>
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon
                                name={showPassword ? 'eye' : 'eye-slash'}
                                size={20}
                                color="#000"
                                style={styles.iconPassword}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerBotao}>
                        <Button 
                            styles={styles.BotaoVerificaCodigo} 
                            stylesText={styles.textoBotao} 
                            onPress={handleAlterarSenha} 
                            texto={'Redefinir Senha'}
                        />
                        

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
                </View>
            </Modal>

            {/* 
            
                Termina aqui!!!
            */}

            <ScrollView>
                <TouchableOpacity  onPress={pickImage}>
                    <View style={styles.containerImagem}>
                        {image && <Image source={{ uri: image }} style={[styles.image, {borderColor: typeCor[1]}]} />}
                    </View>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity style={styles.icon} onPress={pickImage}>
                            <Icon name="plus" size={25} style={[{ color: typeCor[1] }]}/>
                        </TouchableOpacity>
                    </View>
                <View>
                    <View style={[styles.inputWrapper, {backgroundColor: typeCorMoon[0]}]}>
                        <TextInput
                            placeholder="Nome completo"
                            style={[styles.inputLogin, {backgroundColor: typeCorMoon[0], borderColor: typeCor[1]}]}
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                        />
                    </View>
                    <View style={[styles.inputWrapper, {backgroundColor: typeCorMoon[0]}]}>
                        <TextInput
                            placeholder="CPF"
                            style={[styles.inputLogin, {backgroundColor: typeCorMoon[0], borderColor: typeCor[1]}]}
                            value={userCpf}
                            onChangeText={(text) => setUserCpf(text)}
                        />
                    </View>
                    <View style={[styles.inputWrapper, {backgroundColor: typeCorMoon[0]}]}>
                        <TextInput
                            placeholder="E-mail"
                            style={[styles.inputLogin, {backgroundColor: typeCorMoon[0], borderColor: typeCor[1]}]}
                            value={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                        />
                    </View>
        
                    <View style={[styles.inputWrapper, {backgroundColor: typeCorMoon[0]}]}>
                        <TextInput
                            placeholder="Telefone"
                            style={[styles.inputLogin, {backgroundColor: typeCorMoon[0], borderColor: typeCor[1]}]}
                            value={userTelefone}
                            onChangeText={(text) => setUserTelefone(text)}
                        />
                    </View>
                    <View style={[styles.inputWrapper, {backgroundColor: typeCorMoon[0]}]}>
                        <TextInput
                            placeholder="Matrícula"
                            style={[styles.inputLogin, {backgroundColor: typeCorMoon[0], borderColor: typeCor[1]}]}
                            value={userMatricula}
                            onChangeText={(text) => setUserMatricula(text)}
                        />
                    </View>

                    <View style={styles.containerCor}>
                        <View style={styles.telaCor}>
                            <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#4DB9DB' }]} onPress={() => setTypeCor(['#4DAFCF', '#4DB9DB'])} />
                            <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#D19195' }]} onPress={() => setTypeCor(['#D19195', '#DB91A0'])} />
                            <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#5480ba' }]} onPress={() => setTypeCor(['#5480ba', '#7caff2'])} />
                            <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#4D993A' }]} onPress={() => setTypeCor(['#4D993A', '#47CC25'])} />
                            <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#ff9800' }]} onPress={() => setTypeCor(['#ff9800', '#ffcc50'])}/>
                            {/* <TouchableOpacity style={[styles.botaoCor, { backgroundColor: '#6F7073' }]} onPress={() => setTypeCor(['#ff9800', '#ffcc50'])}/>  */}
                        </View>
                    </View>
                </View>

                <View style={styles.containerBotao}>
                    <Button
                        styles={styles.botaoAtualizarUsuario}
                        stylesText={styles.textoBotao}
                        onPress={handleAtualiza}
                        texto={'Atualizar dados'}
                    />
                    <Button
                        styles={styles.botaoAtualizarSenha}
                        stylesText={styles.textoBotao}
                        onPress={toggleModal}
                        texto={'Alterar senha'}
                    />
                </View>
            </ScrollView>
        </View>
    );
}