import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface EquipmenteProps{
    equipmente: Props[]
    setEquipmente: Function
    createEquipment: Function
    getEquipment: Function
    loaded: boolean
    setLoaded: Function
    putEquipment: Function
}

export interface Props{
    ativado: boolean;
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