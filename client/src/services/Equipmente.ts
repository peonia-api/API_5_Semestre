import { EquipmenteProps } from '../types'
import api from './api'

class Equipmente{
    async get(): Promise<EquipmenteProps> {
        try{
            const { data }= await api.get('/equipment/listEquipment')
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

    async put(body: EquipmenteProps): Promise<EquipmenteProps>{
        try{
            const res = await api.put(`/equipment/updateEquipment/${body.id}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }

    async patch(body: EquipmenteProps): Promise<EquipmenteProps>{
        try{
            const res = await api.patch(`/equipment/alterStatusEquipment/${body.id}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }
}

export default new Equipmente()