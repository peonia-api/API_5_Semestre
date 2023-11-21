import React, { useContext, useState } from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FiltroModal from "./FiltroModal";
import { AuthContext } from "../../contexts";

interface FiltroProps {
    onFilter: (isActive: number | null) => void;
}

export default function Filtro({ onFilter }: FiltroProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const { typeCorMoon } = useContext(AuthContext);
    const handleFilterToggle = (isActive: number | null ) => {
        setSelectedOption(isActive);
        setModalVisible(false);
        onFilter(isActive);
    };

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <FontAwesome name="filter" size={30} style={[{color: typeCorMoon[1]}]} />
                </TouchableOpacity>
            </View>
            <FiltroModal isVisible={modalVisible} onToggle={handleFilterToggle} />
        </View>
    );
}
