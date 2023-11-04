import React, { useState, useEffect } from "react";
import { ScrollView, TextInput, View, Image, TouchableOpacity, Alert, Modal, Text } from "react-native";
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
import { SelectList } from 'react-native-dropdown-select-list'
import { Picker } from "@react-native-picker/picker";

function ApprovalProfile({ navigation }: any) {
    const [userName, setUserName] = useState<string>("");
    const [userEmail, setUserEmail] = useState<any>("");
    const [userCpf, setUserCpf] = useState<string>("");
    const [userMatricula, setUserMatricula] = useState<string>("");
    const [userTelefone, setUserTelefone] = useState<string>("");
    const [userId, setUserId] = useState<string>("");
    const [image, setImage] = useState<any>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const { setLoaded, loaded } = useContextoEquipmente();



    return (
        <View style={styles.container}>
            {loaded && (
                <View style={styles.uploadingAnimation}>
                    <LottieView
                        autoPlay={true}
                        loop={true}
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'white',
                        }}
                        source={require('../../assets/carregando.json')}
                    />
                </View>
            )}

            <ScrollView>
                <View style={styles.containerImagem}>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                </View>

                <View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="NOME COMPLETO"
                            style={styles.inputLogin}
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="CPF"
                            style={styles.inputLogin}
                            value={userName}
                            onChangeText={(text) => setUserName(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="E-MAIL"
                            style={styles.inputLogin}
                            value={userCpf}
                            onChangeText={(text) => setUserCpf(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="TELEFONE"
                            style={styles.inputLogin}
                            value={userEmail}
                            onChangeText={(text) => setUserEmail(text)}
                            placeholderTextColor="black"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="MATRÍCULA"
                            style={styles.inputLogin}
                            value={userTelefone}
                            onChangeText={(text) => setUserTelefone(text)}
                            placeholderTextColor="black"
                        />
                    </View>
                </View>

                <View style={styles.containerBotao}>
                    <Button
                        styles={styles.botaoAcao}
                        stylesText={styles.textoBotao}
                        //onPress={handleAtualiza}
                        texto={'Atualizar dados'}
                    />
                
                </View>    

            </ScrollView>
        </View>
    );

};


export default React.memo(ApprovalProfile)