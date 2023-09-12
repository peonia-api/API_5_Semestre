import cors = require("cors");
import { Router, Request, Response } from "express";

import equipment from "./equipment";
import e = require("cors");

const routes = Router()

routes.use(cors());

routes.use("/equipment", equipment);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;