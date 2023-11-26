import { useNetInfo } from "@react-native-community/netinfo";
import { Create } from "../controllers";
import { upload } from "../supabase/upload";
import { useContextoEquipmente } from "../hooks";


async function off() {
    const { createEquipmentOffiline, get10, } = useContextoEquipmente();
    const { isInternetReachable } = useNetInfo()
    if(isInternetReachable === true && await Create.exite() === true){
        const dados = await Create.get()
        const item:any = []
        
        
        dados.forEach(async (res:any) => {
          if(item.indexOf(res.serial) === -1){
            const response = await upload(res.serial, res.url);
            await createEquipmentOffiline({
              type: res.type,
              numero: res.numero,
              serial: res.serial,
              latitude: res.latitude,
              longitude: res.longitude,
              observations: res.observations,
              url: response,
              status: true
            });
            item.push(res.serial)   
          }
          
        })
        await Create.drop()
      }
}

export default off