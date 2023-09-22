import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface EquipmenteProps{
    equipmente: Props[]
    setEquipmente: Function
    createEquipment: Function
}

export interface Props{
    _id: string
    type: string,
    numero: number,
    serial: string,
    latitude: number,
    longitude: number,
    observations: string,
    url: string[],
    status: boolean
}