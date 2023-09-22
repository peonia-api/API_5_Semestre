import { createContext, useEffect, useState } from "react";
import { EquipmenteProps } from "../types"
import { Props } from '../types/equipmente'
import { Equipmente } from "../services";
import React from 'react';

export const ContextoEquipmente = createContext({} as EquipmenteProps)

export function Provider({ children }: any){
    const [ equipmente, setEquipmente ] = useState<Props[]>([]);
    
    

    useEffect(() => {
        (async function () {
            const resp:any = await Equipmente.get()            
            setEquipmente(resp)
        })()
    }, [])

    const createEquipment = async (newEquipment: Props) => {
        try {
          const createdEquipment = await Equipmente.post(newEquipment);
          setEquipmente((prevEquipmente) => [...prevEquipmente, createdEquipment]);
        } catch (error) {
          console.error('Erro ao criar equipamento:', error);
        }
      };
    

    return (
        <ContextoEquipmente.Provider value={{equipmente, setEquipmente, createEquipment}}>
            {children}
        </ContextoEquipmente.Provider>
    )
}