import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import styles from "./style";

interface PesquisaProps {
  onSearch: (text: string) => void;
}

export default function Pesquisa({ onSearch }: PesquisaProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (text: string) => {
    setSearchValue(text);
    // Chame a função de pesquisa passada por props para atualizar os resultados
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={require("../../assets/search.png")}
          style={styles.icon}
        />
        <TextInput
          placeholder="Buscar"
          style={styles.input}
          value={searchValue}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
}
