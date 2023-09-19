import React, { useState } from "react";
import { View, Text, Image, Button, TextInput, FlatList } from "react-native";
import styles from "./style";
import Pesquisa from "../Pesquisa";
import { Picker } from "@react-native-picker/picker";

export default function Mapa() {
  const [selectedEquipa, setSelectedEquipa] = useState<string>('');

  const handleEquipamentoChange = (equipamento: string) => {
    setSelectedEquipa(equipamento);
  };

  const data = [
    {
      id: 1,
      text1: "Transformador #T1000",
      text2: "21215-321",
    },
    {
      id: 2,
      text1: "Transformador #T1001",
      text2: "21215-321",
    },
    {
      id: 3,
      text1: "Transformador #T1002",
      text2: "21215-321",
    },
    {
      id: 4,
      text1: "Transformador #T1003",
      text2: "21215-321",
    }
  ];

  return (
    <View style={styles.containerPrincipal}>
      <View style={styles.containerTrans}>
        <Picker
          selectedValue={selectedEquipa}
          onValueChange={handleEquipamentoChange}
          style={styles.picker}
        >
          <Picker.Item label="Equipamento" value="" enabled={false} />
          <Picker.Item label="Transformador" value="Transformador" />
          <Picker.Item label="Poste" value="Poste" />
          <Picker.Item label="Bomba hidráulica" value="Bomba hidráulica" />
        </Picker>
      </View>

      <View>
        <Text>Mapa</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Text style={styles.textfont}>{item.text1}</Text>
              <Text>{item.text2}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
