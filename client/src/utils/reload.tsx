import { Equipment } from "../controllers"
import { useContextoEquipmente } from "../hooks";
import { Equipmente } from "../services"

async function reloadAPP() {
    const { get10 ,setLoaded, setEquipmente } = useContextoEquipmente();
    setLoaded(true)
    const resp: any = await Equipmente.get()

    Equipment.insert(resp)
    const equipmentController:any[] = await Equipment.get()
    
    setEquipmente(equipmentController)
    await get10()
    setLoaded(false)
}

export default reloadAPP