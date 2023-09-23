import React, { useState } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { useContextoEquipmente } from "../../hooks";

export default function Status(){
    const {equipmente, setEquipmente} = useContextoEquipmente();

    const toggleStatus = (index: any) => {
        const updatedEquipmente = [...equipmente];
        updatedEquipmente[index].ativado = !updatedEquipmente[index].ativado;
        setEquipmente(updatedEquipmente);
    }

    return (
        <View>
            {equipmente.map((equipamento, index) => (
                <View key={index}>
                    <Text>Status: {equipamento.ativado ? 'Sim' : 'Não'}</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={equipamento.ativado ? '#81b0ff' : '#f4f3f4'}
                        value={equipamento.ativado}
                        onValueChange={() => toggleStatus(index)}
                    />
                </View>
            ))}
        </View>
    )
}


// export default function(props){
//     const [ equipmente, setEquipmente] = useContextoEquipmente();
//     //const toggleStatus = () => {
//     //    setStatus(previousState => !previousStatus)
//     }
//     const toggleStatus = () => {
//         setEquipament(!ativado)
//     }
    
//     return (
//         <View>
//             <Text>Status:?{ativado? 'Sim' : 'Não'}</Text>
//             <Switch
//                 trackColor={{false: "#767577", true: "#81b0ff" }}
//                 thumbColor={ativado ? '#81b0ff' : '#f4f3f4'}
//                 value={ativado}
//                 onValueChange={toggleStatus}
//             />

//         </View>
        
//     )
// }