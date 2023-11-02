import React, { useEffect, useRef, useState } from "react";
import { View, Image, Alert, TouchableOpacity, Text, FlatList } from "react-native";
import MapView, { Marker, Circle }  from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from "expo-location";
import LottieView from 'lottie-react-native';
import { useContextUser, useContextoEquipmente } from '../../hooks'
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome';
import { PanResponder, Animated } from 'react-native';
import CustomMarker  from "./CustomMarker";
import Equipamento10km from './List10km'
import MapaView from "./Mapa";


interface Props{
    flatListVisible: boolean
    setFlatListVisible: Function
}

const SubList = (props:Props) => {
    const [gestureY, setGestureY] = useState(0);
    
    const handlePanResponderMove = (_:any, gestureState:any) => {
        if (gestureState.dy > 0) {
          // Deslizamento para baixo: feche a FlatList
          props.setFlatListVisible(false);
        } else if (gestureState.dy < 0) {
          // Deslizamento para cima: abra a FlatList
          props.setFlatListVisible(true);
        }
    
        // Atualize o estado com a posição vertical do gesto
        setGestureY(gestureState.dy);
      };
    
      const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: handlePanResponderMove,
      });

    return(
        <Animated.View style={{
            position: 'absolute',
            top: props.flatListVisible ? '45%': '90%',
            left: '50%',
            transform: [{ translateX: -35 }, { translateY: Animated.add(
              gestureY > 0 ? -35: -35,
              new Animated.Value(props.flatListVisible ? 0 : 1) // Adicione este valor
            ), }]
          }}
          {...panResponder.panHandlers}
        >
          <TouchableOpacity
              onPress={() => props.setFlatListVisible(!props.flatListVisible)}
              style={[styles.showFlatListButton, { backgroundColor: 'rgba(0, 0, 0, 0)' }]}
            >
            <Icon name={props.flatListVisible ?  "angle-double-down" :"angle-double-up"} size={70} color="#000000" />
          </TouchableOpacity>
        </Animated.View>
    )
}

export default React.memo(SubList)