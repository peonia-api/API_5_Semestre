import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface EquipmenteProps{
    equipmente: Props
    setEquipmente: Function
}

export interface Props{
    id: string
    type: number,
    serial: string,
    latitude: Double,
    longitude: Double,
    observations: string,
    url: string[],
    status: boolean
}