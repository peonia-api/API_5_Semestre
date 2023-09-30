import { supabase, urlupload } from './conection'


export default async function upload(name:string, file:any){
    console.log(name);
    console.log(file);
    try{
        if(file.uri !== null){
            const numeroAle = Math.random()
            const nameNew =  name + numeroAle +"." + file.uri.split('.')[3]
            const { data, error } = await supabase
            .storage
            .from('imagens')
            .upload(nameNew, file)
    
            return [urlupload + nameNew]
        }
    }catch(err){
        return err
    }

            
}