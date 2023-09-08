import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Pesquisa from "../Pesquisa";
import Cadastro from "../Cadastro";
import styles from "./style";
import ListaEquipamento from "../../ListagemEquipamento";
import Detalhe from "../Detalhe";

export default function Header() {
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);

    const mostrarConteudo = (opcao: any) => {
        setOpcaoSelecionada(opcao);
    };

    return (
        <View>
            <Pesquisa />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao1')}>
                    <Text style={styles.textfont}>Lista Equipamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao2')}>
                    <Text style={styles.textfont}>Mapa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao3')}>
                    <Text style={styles.textfont}>Detalhes</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.conteudoSelecionado}>
                {opcaoSelecionada === 'Opcao1' && <ListaEquipamento />}
                {opcaoSelecionada === 'Opcao2' && <Cadastro/>}
                {opcaoSelecionada === 'Opcao3' && <Detalhe />}
            </View>
        </View>
    );
}
