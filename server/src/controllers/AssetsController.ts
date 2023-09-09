import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Equipment } from "../entity/Equipment";

class AssetsController{
    public async getEquipamento(req: Request, res: Response): Promise<Response> {
        const rep = AppDataSource.getRepository(Equipment)
        const all = await rep.find()
        return res.json(all)
    }

    public async postEquipamento(req: Request, res: Response): Promise<Response> {
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
    }

    public async putStatusEquipamento(req: Request, res: Response): Promise<Response> {
        const rep = AppDataSource.getRepository(Equipment)
        const createEquip = req.body
        const equip_id: any = req.params.uuid
        const equipRepository = AppDataSource.getRepository(Equipment)
        const findEquip = await equipRepository.findOneBy({ id: equip_id })
        findEquip.type = createEquip.type
        findEquip.serial = createEquip.serial
        return res.json(findEquip)
    }

}

export default new AssetsController()