import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Equipment } from "../entity/Equipment";
import { ObjectId } from 'mongodb';



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
        insertEquip.type = createEquip.type
        insertEquip.serial = createEquip.serial
        insertEquip.latitude = createEquip.latitude
        insertEquip.longitude = createEquip.longitude
        insertEquip.observations = createEquip.observations
        insertEquip.url = createEquip.url
        const allEquip = await equipRepository.save(insertEquip)
        return res.json(allEquip)

    }catch(error){
        return res.json(error)
    }
    }
        
    public async putStatusEquipment(req: Request, res: Response): Promise<Response> {
        try {
            const createEquip = req.body;
            const id: any = new ObjectId(req.params.uuid)
            const rep = AppDataSource.getMongoRepository(Equipment)
            const findEquip:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Equipamento não existe!"})
                
            }) 
            findEquip.type = createEquip.type;
            findEquip.serial = createEquip.serial;
            findEquip.latitude = createEquip.latitude;
            findEquip.longitude = createEquip.longitude;
            findEquip.observations = createEquip.observations;
            findEquip.url = createEquip.url

            const equipamentoAtualizado = await rep.save(findEquip);
            return res.json({equipamentoAtualizado, "message": "Foi"});
        } catch (error) {
            return res.json(error);
        }
    }
    

}

export default new EquipmentController()