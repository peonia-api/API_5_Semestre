import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import Cadastro from '../Cadastro';

export default function ListaEquipamento() {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const mostrarConteudo = (opcao: any) => {
        setOpcaoSelecionada(opcao);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao} onPress={() => mostrarConteudo('Opcao1')}>
                <Text style={styles.textoBotao}>Cadastrar Equipamento</Text>
            </TouchableOpacity>
            <View >
                {opcaoSelecionada === 'Opcao1' && <Cadastro />}
            </View>
        </View>
    );
}


