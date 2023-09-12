import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Equipment } from "../entity/Equipment";
import { loadavg } from "os";

class EquipmentController {
    public async getEquipment(req: Request, res: Response): Promise<Response> {
    try{
        const rep = AppDataSource.getRepository(Equipment)
        const all = await rep.find()
        return res.json(all)

    }catch(error){
        return res.json(error)

    }
      
    }

    public async postEquipment(req: Request, res: Response): Promise<Response> {
    try{
        const createEquip = req.body
        const equipRepository = AppDataSource.getRepository(Equipment)
        const insertEquip = new Equipment();
        insertEquip.id = createEquip.id
        insertEquip.type = createEquip.type
        insertEquip.serial = createEquip.serial
        insertEquip.latitude = createEquip.latitude
        insertEquip.longitude = createEquip.longitude
        insertEquip.observations = createEquip.observations
        const allEquip = await equipRepository.save(insertEquip)
        return res.json(allEquip)

    }catch(error){
        return res.json(error)
    }
    }
        
    public async putStatusEquipment(req: Request, res: Response): Promise<Response> {
    try{
        const rep = AppDataSource.getRepository(Equipment)
        const createEquip = req.body
        const equip_id: any = req.params.uuid
        const findEquip = await rep.findOneBy({ id: equip_id })
        findEquip.type = createEquip.type
        findEquip.serial = createEquip.serial
        findEquip.latitude = createEquip.latitude
        findEquip.longitude = createEquip.longitude
        findEquip.observations = createEquip.observations
        return res.json(findEquip)

    } catch(error){
        return res.json(error)
    }
    }  

}

export default new EquipmentController()