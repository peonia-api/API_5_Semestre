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
        insertEquip.equip_id = createEquip.equip_id
        insertEquip.equip_tipo = createEquip.equip_tipo
        insertEquip.equip_serial = createEquip.equip_serial
        insertEquip.equip_latitude = createEquip.equip_latitude
        insertEquip.equip_longitude = createEquip.equip_longitude
        insertEquip.equip_observacoes = createEquip.equip_observacoes
        //insertEquip.equip_foto = createEquip.equip_foto
        const allEquip = await equipRepository.save(insertEquip)
        return res.json(allEquip)
    }

    public async putStatusEquipamento(req: Request, res: Response): Promise<Response> {
        const rep = AppDataSource.getRepository(Equipment)
        const createEquip = req.body
        const equip_id: any = req.params.uuid
        const equipRepository = AppDataSource.getRepository(Equipment)
        const findEquip = await equipRepository.findOneBy({ equip_id: equip_id })
        findEquip.equip_tipo = createEquip.equip_tipo
        findEquip.equip_serial = createEquip.equip_serial
        return res.json(findEquip)
    }

}

export default new AssetsController()