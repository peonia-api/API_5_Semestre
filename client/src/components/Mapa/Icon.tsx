import React from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useContextUser, useContextoEquipmente } from "../../hooks";
import CustomMarker from "./CustomMarker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./style";

interface IconProps {
    location: any;
    setMapRegion: Function;
    onReload: Function;
}

const Icon = (props: IconProps) => {
    const handleCurrentLocationPress = () => {
        if (props.location.coords.latitude && props.location.coords.longitude) {
            props.setMapRegion({
                latitude: props.location.coords.latitude,
                longitude: props.location.coords.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.0001,
            });

            // Chame a função onReload para sinalizar o recarregamento
            props.onReload();
        }
    };

    return (
        <TouchableOpacity style={styles.iconMap} onPress={handleCurrentLocationPress}>
            <FontAwesome name="street-view" size={30} color="red" />
        </TouchableOpacity>
    );
};

export default Icon;