import axios from "axios";

export enum URI {
    PEGAR_EQUIPAMENTO = "http://localhost:3001/equipment/listEquipment",
    PEGAR_EQUIPAMENTO_ESPECIFICO = "http://localhost:3001/equipment/listOne/",
    ENVIAR_EQUIPAMENTO = "http://localhost:3001/equipment/createEquipment",
    ALTERA_EQUIPAMENTO = "http://localhost:3001/equipment/updateEquipment/",
    STATUS_EQUIPAMENTO = "http://localhost:3001/equipment/alterStatusEquipment/",
}

export const api = axios.create({
    baseURL: 'http://localhost:3001',
    withCredentials: true
})
