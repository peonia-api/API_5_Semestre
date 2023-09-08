import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserController{
    public async getUsuario(req: Request, res: Response): Promise<Response> {
        const rep = AppDataSource.getRepository(User)
        const all = await rep.find()
        return res.json(all)
    }

    public async postUsuario(req: Request, res: Response): Promise<Response> {
        const { id } = req.body
        const rep = AppDataSource.getRepository(User)
        const insert = new User()
        insert.usuario_id = id
        //insert.date = new Date()
        const save = rep.save(insert)
        return res.json(save)
    }
}
export default new UserController()