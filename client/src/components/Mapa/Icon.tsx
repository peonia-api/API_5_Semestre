import React from "react";
import { View, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useContextUser, useContextoEquipmente } from "../../hooks";
import CustomMarker from "./CustomMarker";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./style";

interface Props {
    location: any;
}

export default function Icon(props: Props) {

    const handleCurrentLocationPress = () => {
        {
            props.location.coords.latitude && props.location.coords.longitude && (
                <Marker
                    coordinate={{
                        latitude: props.location.coords.latitude,
                        longitude: props.location.coords.longitude,
                    }}
                    title="Minha Localização"
                >
                </Marker>
            )
        }
    };

    return (
        <TouchableOpacity
            style={styles.iconMap}
            onPress={handleCurrentLocationPress}
        >
            <FontAwesome name="street-view" size={30} color="red" />
        </TouchableOpacity>
    )
}