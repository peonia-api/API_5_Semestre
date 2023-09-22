import { supabase, urlupload } from './conection'

export default async function upload(name:string, file:any){
    console.log(name);
    console.log(file);
    try{
        if(file.uri !== null){
            const { data, error } = await supabase
            .storage
            .from('imagens')
            .upload(name, file)
    
            return data
        }
    }catch(err){
        return err
    }

            
}