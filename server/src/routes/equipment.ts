import { Router } from "express";
import { EquipmentController } from "../controllers";

const routes = Router()

routes.get("/equipment", EquipmentController.getEquipment)
routes.post("/equipment",  EquipmentController.postEquipment)
routes.put("/equipment/:uuid", EquipmentController.postEquipment)

export default routes;