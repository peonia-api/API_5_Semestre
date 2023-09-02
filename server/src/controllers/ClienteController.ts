import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Cliente } from "../entity/Cliente";
class ClienteController{
    public async getCli(req: Request, res: Response): Promise<Response> {
        const rep = AppDataSource.getRepository(Cliente)
        const all = await rep.find()
        return res.json(all)
    }

    public async postCli(req: Request, res: Response): Promise<Response> {
        const { id } = req.body
        const rep = AppDataSource.getRepository(Cliente)
        const insert = new Cliente()
        insert.cli_id = id
        insert.date = new Date()
        const save = rep.save(insert)
        return res.json(save)
    }
}
export default new ClienteController()