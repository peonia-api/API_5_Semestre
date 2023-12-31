import { Router } from "express";
import { EquipmentController } from "../controllers";

const routes = Router()

routes.get("/listEquipment", EquipmentController.getEquipment)
routes.get("/listOne/:uuid", EquipmentController.getOne)
routes.get("/list10km/:latitude/:longitude", EquipmentController.get10km)
routes.post("/createEquipment",  EquipmentController.postEquipment)
routes.put("/updateEquipment/:uuid", EquipmentController.putEquipment)
routes.patch("/alterStatusEquipment/:uuid", EquipmentController.patchStatusEquipmant)

export default routes;