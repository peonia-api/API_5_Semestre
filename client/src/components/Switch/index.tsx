// import React, { useState } from "react";
// import { View, Text } from "react-native";
// import { Switch } from "react-native-paper";
// import { useContextoEquipmente } from "../../hooks";

// export default function SwitchStatus() {
//     const {equipmente, setEquipmente} = useContextoEquipmente();

//     const toggleStatus = (index: any) => {
//         const updatedEquipmente = [...equipmente];
//         updatedEquipmente[index].status = !updatedEquipmente[index].status;
//         setEquipmente(updatedEquipmente);
//     }

//     return (
//         <View>
//             {equipmente.map((equipamente, index) => (
//                 <View key={index}>
//                     <Text>Status: {equipamente.status ? 'Sim' : 'Não'}</Text>
//                     <Switch
//                         trackColor={{ false: "#767577", true: "#81b0ff" }}
//                         thumbColor={equipamente.status ? '#81b0ff' : '#f4f3f4'}
//                         value={equipamente.status}
//                         onValueChange={() => toggleStatus(index)}
//                     />
//                 </View>
//             ))}
//         </View>
//     )
// }
