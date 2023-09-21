import { supabase } from './index'

export const listBuckets = async() => {
    
    
    const { data, error } = await supabase
    .storage
    .from('imagens')
    .list()

    
    console.log(data);
    
    return data
}