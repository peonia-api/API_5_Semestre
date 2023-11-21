import React, { useState } from "react";
import { View, TextInput, Image } from "react-native";
import styles from "./style";
import { useContextUser } from "../../hooks";
import FontAwesome from "react-native-vector-icons/FontAwesome";

interface PesquisaProps {
  onSearch: (text: string) => void;
  customStyle?: object;
}

export default function Pesquisa({ onSearch, customStyle }: PesquisaProps) {
  const [searchValue, setSearchValue] = useState("");
  const { typeCorMoon, setTypeCorMoon } = useContextUser()
  
  const handleSearch = (text: string) => {
    setSearchValue(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={[{ ...styles.inputContainer, ...customStyle, borderColor: typeCorMoon[1] }]}>

          <FontAwesome name="search" size={20} style={[{color: typeCorMoon[1]}]} />
        <TextInput
          placeholder="Buscar"
          style={[styles.input, {color: typeCorMoon[2]}]}
          value={searchValue}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
}
