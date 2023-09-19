import { EquipmenteProps } from '../types'
import api from './api'

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

    async getOne(id: string): Promise<EquipmenteProps>{
        try{
            const { data } = await api.get(`/equipment/listOne/${id}`)
            return data
        }catch(err){
            throw err
        }
    }

    async post(body: EquipmenteProps): Promise<EquipmenteProps>{
        try{
            const res = await api.post('/equipment/createEquipment', body)
            return res.data
        }catch(err){            
            throw err
        }
    }

    async put(id: string, body: EquipmenteProps): Promise<EquipmenteProps>{
        try{
            const res = await api.put(`/equipment/updateEquipment/${id}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }

    async patch(id: string, body: EquipmenteProps): Promise<EquipmenteProps>{
        try{
            const res = await api.patch(`/equipment/alterStatusEquipment/${id}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }
}

export default new Equipmente()