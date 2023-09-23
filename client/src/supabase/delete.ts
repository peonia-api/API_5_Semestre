import { supabase } from "./conection";

export async function removeFileOne(name: any) {
    try{
        console.log(name);
        const { data, error } = await supabase
        .storage
        .from('imagens')
        .remove(name)
    }catch(err){
        return err
    }
}