import React from "react";
import { View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useContextUser } from "../../hooks";
import styles from "./style";

interface ReloadProps {
  onReload: () => void;
}

const Reload: React.FC<ReloadProps> = ({ onReload }) => {
  const { typeCor } = useContextUser();

  const handleReload = () => {
    onReload();
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
