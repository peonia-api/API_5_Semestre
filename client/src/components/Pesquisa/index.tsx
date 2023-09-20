import { View, TextInput, Image } from "react-native"
import styles from "./style";

export default function Pesquisa() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Image
                    source={require("../../assets/search.png")}
                    style={styles.icon}
                />
                <TextInput placeholder="Buscar" style={styles.input} />
            </View>

        </View>

    );
}
