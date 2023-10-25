import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Equipment } from "../entities/Equipment";
import { ObjectId } from 'mongodb';
import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();


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

    public async getOne(req: Request, res: Response): Promise<Response>{
        try{
            const id:any = new ObjectId(req.params.uuid)
            const rep = AppDataSource.getMongoRepository(Equipment)
            const findEquip:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Equipamento não existe!"})
                
            })
            return res.status(200).json(findEquip)
        }catch(err){
            return res.status(400).json({'message': 'Erro ao pegar o equipamento!', "erro": true})
        }
    }

    public async get10km(req: Request, res: Response): Promise<Response>{
        try{
            const { latitude, longitude } = req.body

            const client = new MongoClient(`${process.env.DB}`);
            await client.connect();

            const collection = client.db('clientes').collection('equipment');

            const radius = 10000;

            const equipmentWithinRadius = await collection.find({ 
                point: { 
                    $nearSphere: { 
                        $geometry: {
                            type: "Point", coordinates: [ latitude, longitude ] 
                        }, 
                        $maxDistance: radius 
                    } 
                } 
            }).toArray()
            
            await client.close();
            
            return res.json(equipmentWithinRadius)
        }catch(err){
            return res.status(400).json({"message": "Erro ao pegar os equipementos!", "erro": true, "err": err})
        }
    }

    public async postEquipment(req: Request, res: Response): Promise<Response> {
    try{
        const createEquip = req.body
        const equipRepository = AppDataSource.getRepository(Equipment)
        const insertEquip = new Equipment();
        insertEquip.type = createEquip.type
        insertEquip.numero = Number(createEquip.numero)
        insertEquip.serial = createEquip.serial
        insertEquip.point = {
            type: "Point",
            coordinates: [Number(createEquip.latitude), Number(createEquip.longitude)],
        }
        insertEquip.latitude = Number(createEquip.latitude)
        insertEquip.longitude = Number(createEquip.longitude)
        insertEquip.observations = createEquip.observations
        insertEquip.url = createEquip.url
        insertEquip.status = createEquip.status
        const allEquip = await equipRepository.save(insertEquip)
        return res.json(allEquip)

    }catch(error){
        return res.json(error)
    }
    }
        
    public async putEquipment(req: Request, res: Response): Promise<Response> {
        try {
            const createEquip = req.body;
            const id: any = new ObjectId(req.params.uuid)
            const rep = AppDataSource.getMongoRepository(Equipment)
            const findEquip:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Equipamento não existe!"})
                
            }) 
            findEquip.type = createEquip.type;
            findEquip.numero = Number(createEquip.numero)
            findEquip.serial = createEquip.serial;
            findEquip.point = {
                type: "Point",
                coordinates: [Number(createEquip.latitude), Number(createEquip.longitude)],
            }
            findEquip.latitude = Number(createEquip.latitude)
            findEquip.longitude = Number(createEquip.longitude)
            findEquip.observations = createEquip.observations;
            findEquip.url = createEquip.url

            const equipamentoAtualizado = await rep.save(findEquip);
            return res.json({equipamentoAtualizado, "message": "Foi"});
        } catch (error) {
            return res.json(error);
        }
    }

    public async patchStatusEquipmant(req: Request, res: Response): Promise<Response> {
        try{
            const { status } = req.body
            const id:any = new ObjectId(req.params.uuid)

            const rep = AppDataSource.getMongoRepository(Equipment)
            const findEquip:any = await rep.findOneOrFail(id).catch((err) => {
                console.log(err);
                return res.status(404).json({'message': "Equipamento não existe!", "erro": true})
            }) 

            findEquip.status = status

            rep.save(findEquip)
            return res.status(200).json({"message": "Status alterado com sucesso!", "erro": false})
        }catch(err){
            return res.status(400).json({"message": "Erro ao mudar o status!", "erro": true})
        }
    }
    

}

export default new EquipmentController()
