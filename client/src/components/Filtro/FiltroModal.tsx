import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import styles from "./style";

interface FiltroModalProps {
    isVisible: boolean;
    onToggle: (isActive: boolean | null) => void; // Agora aceita boolean ou null
}

export default function FiltroModal({ isVisible, onToggle }: FiltroModalProps) {
    return (
        <Modal transparent={true} animationType="slide" visible={isVisible}>
            <View style={styles.containerModal}>
                <View style={styles.modalContent}>
                    <Text>Selecione o filtro:</Text>
                    <TouchableOpacity onPress={() => onToggle(true)}>
                        <Text>Ativo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onToggle(false)}>
                        <Text>Desativado</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onToggle(null)}>
                        <Text>Limpar Filtro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
