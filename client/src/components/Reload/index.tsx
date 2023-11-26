import React from "react";
import { View, TouchableOpacity, Alert } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useContextUser } from "../../hooks";
import styles from "./style";
import { useNetInfo } from "@react-native-community/netinfo";

interface ReloadProps {
  onReload: () => void;
}

const Reload: React.FC<ReloadProps> = ({ onReload }) => {
  const { typeCor } = useContextUser();
  const { isInternetReachable } = useNetInfo()

  const handleReload = () => {
    if(isInternetReachable === true){
    onReload();
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

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity onPress={handleReload}>
          <FontAwesome name="rotate-right" size={30} style={[{ color: typeCor[1] }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reload;
