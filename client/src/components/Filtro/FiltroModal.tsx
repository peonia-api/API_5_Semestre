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
                    <Text style={styles.textModal}>Selecione o filtro</Text>
                    
                    <TouchableOpacity onPress={() => onToggle(true)} style={styles.option}>
                        <Text style={styles.textModal}>Ativo</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onToggle(false)} style={styles.option}>
                        <Text style={styles.textModal}>Desativado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onToggle(null)} style={styles.option}>
                        <Text style={styles.textModal}>Limpar Filtro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
