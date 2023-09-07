import { TouchableOpacity, View, Text } from "react-native"
import Pesquisa from "../Pesquisa";
import Cadastro from "../Cadastro";
import { useState } from "react";


export default function Header() {

    const [opcaoSelecionada, setOpcaoSelecionada] = useState(''); // Inicialize com uma string vazia
    const mostrarConteudo = (opcao: any) => {
        setOpcaoSelecionada(opcao);
    };


    return (

        <View >
            <Pesquisa />
            <View >
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao1')}>
                    <Text>Lista Equipamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao2')}>
                    <Text>Mapa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => mostrarConteudo('Opcao3')}>
                    <Text>Detalhes</Text>
                </TouchableOpacity>
                {opcaoSelecionada === 'Opcao1' && <Cadastro />}
                {opcaoSelecionada === 'Opcao2' && <Cadastro />}
                {opcaoSelecionada === 'Opcao3' && <Cadastro />}
            </View>
        </View>

    );
}




