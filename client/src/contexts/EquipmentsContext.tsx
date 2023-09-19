import { createContext, useEffect, useState } from "react";
import { EquipmenteProps } from "../types"
import { Props } from '../types/equipmente'
import { Equipmente } from "../services";

export const ContextoEquipmente = createContext({} as EquipmenteProps)

export function Provider({ children }: any){
    const [ equipmente, setEquipmente ] = useState({} as Props[])

    useEffect(() => {
        (async function () {
            const resp:any = await Equipmente.get()            
            setEquipmente(resp)
        })()
    }, [])

    return (
        <ContextoEquipmente.Provider value={{equipmente, setEquipmente}}>
            {children}
        </ContextoEquipmente.Provider>
    )
}