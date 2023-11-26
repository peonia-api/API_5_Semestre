import { EquipmenteProps } from '../types'
import api from './api'

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

interface km{
    latitude: number,
    longitude: number,
}

class Equipmente{
    async get(): Promise<EquipmenteProps> {
        try{
            const { data } = await api.get('/equipment/listEquipment')
            return data
        }catch(err){
            console.error("Deu erro Aqui");
            throw err
        }
    }

    async getOne(id: string): Promise<Props>{
        try{
            const { data } = await api.get(`/equipment/listOne/${id}`)
            return data
        }catch(err){
            throw err
        }
    }

    async get10km(latitude:number, longitude:number): Promise<Props[]>{
        try{
            
            const { data }  = await api.get(`/equipment/list10km/${latitude}/${longitude}`)        
            return data
        }catch(err){
            throw err
        }
    }

    async post(body: Props): Promise<Props>{
        try{
            const res = await api.post('/equipment/createEquipment', body)
            return res.data
        }catch(err){            
            throw err
        }
    }

    async postOffiline(body: Props): Promise<Props | any>{
        try{
            const res = await api.post('/equipment/createEquipment', body)
            return res.data
        }catch(err){            
            console.log("Erro aqui");
        }
    }

    async put(id: string, body: Props): Promise<Props>{
        try{
            const res = await api.put(`/equipment/updateEquipment/${id}`, body)
            return res.data.equipamentoAtualizado
        }catch(err){
            throw err
        }
    }

    async patch(id: string, body: string): Promise<Props>{
        try{
            const res = await api.patch(`/equipment/alterStatusEquipment/${id}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }
}

export default new Equipmente()