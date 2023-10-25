import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default interface UserProps{
    equipmente: Props[]
    setEquipmente: Function
    createEquipment: Function
    getEquipment: Function
    loaded: boolean
    setLoaded: Function
    putEquipment: Function
    patchStatus: Function
}

enum UserType {
    Admin = 1,
    Comum = 2
}

enum Status {
    Ativo = 1,
    Pendente = 2,
    Desativado = 3,
}
export interface Props{
    id: number,
    userCpf: string,
    userMatricula: string,
    userTelefone: string,
    userName: string,
    userEmail: string,
    userType: UserType,
    userPassword: string,
    userStatus: Status,
    token: string,
    icone: string,
}