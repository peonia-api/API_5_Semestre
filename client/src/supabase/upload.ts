import { supabase, urlupload } from './conection'


export async function upload(name: string, files: any[]) {
    console.log('ddddddddddddddr32323232wrwrwrwrwwrrw');
    console.log(files);
    try {
      let list: any = [];
      await Promise.all(files.map(async (arq) => {
        if (arq !== null) {
            console.log('ddwwoooooo' + arq);
          const numeroAle = Math.random();
          console.log( arq.split('.')[1]);
          const arquivo:any = {uri:arq}
          const nameNew = name + numeroAle + "." + arq.split('.')[3];
          const { data, error } = await supabase
            .storage
            .from('imagens')
            .upload(nameNew, arquivo);
        
          list.push(urlupload + nameNew);
        }
      }));
      return list;
    } catch (err) {
      return err;
    }
  }

export async function uploadIcone(name:string, file:any){
    console.log(name);
    console.log(file);
    try{
        if(file.uri !== null){
            const numeroAle = Math.random()
            const nameNew =  name + numeroAle +"." + file.uri.split('.')[3]
            const { data, error } = await supabase
            .storage
            .from('icone')
            .upload(nameNew, file)
    
            return "https://cbrqdjaeurmeftioqfaz.supabase.co/storage/v1/object/public/icone/" + nameNew
        }
    }catch(err){
        return err
    }

            
}