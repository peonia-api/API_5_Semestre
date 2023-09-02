import { Router } from "express";
import { ClienteController } from "../controllers";

const routes = Router()

routes.get("/clientes", ClienteController.getCli)
routes.post("/create", ClienteController.postCli)

export default routes;