import { Router } from "express";
import { EquipmentController } from "../controllers";

const routes = Router()

routes.get("/listEquipment", EquipmentController.getEquipment)
routes.post("/createEquipment",  EquipmentController.postEquipment)
routes.put("/updateEquipment/:uuid", EquipmentController.postEquipment)

export default routes;