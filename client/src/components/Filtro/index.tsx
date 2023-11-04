import React, { useState } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FiltroModal from "./FiltroModal";

interface FiltroProps {
    onFilter: (isActive: boolean | null) => void;
}

export default function Filtro({ onFilter }: FiltroProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<boolean | null>(null);

    const handleFilterToggle = (isActive: boolean | null) => {
        setSelectedOption(isActive);
        setModalVisible(false);
        onFilter(isActive);
    };

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <FontAwesome name="filter" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FiltroModal isVisible={modalVisible} onToggle={handleFilterToggle} />
        </View>
    );
}
