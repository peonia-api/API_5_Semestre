import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import styles from "./style";

export default function ListaEquipamento() {


      
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Image source={require('../assets/iconImage.png')} style={styles.image} />
            <Text style={styles.textfont}>Transformador #T1000</Text>
            <Text>21212 01:02 - 12:54</Text>
          </View>
          <View style={styles.column}>
            <Image source={require('../assets/iconImage.png')} style={styles.image} />
            <Text style={styles.textfont}>Transformador #T1001</Text>
            <Text>21213 02:03 - 13:55</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Image source={require('../assets/iconImage.png')} style={styles.image} />
            <Text style={styles.textfont}>Transformador #T1002</Text>
            <Text>21214 03:04 - 14:56</Text>
          </View>
          <View style={styles.column}>
            <Image source={require('../assets/iconImage.png')} style={styles.image} />
            <Text style={styles.textfont}>Transformador #T1003</Text>
            <Text>21215 04:05 - 15:57</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
