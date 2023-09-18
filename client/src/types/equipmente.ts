import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface EquipmenteProps{
    id: string
    type: number,
    serial: string,
    latitude: Double,
    longitude: Double,
    observations: string,
    url: string[],
    status: boolean
}