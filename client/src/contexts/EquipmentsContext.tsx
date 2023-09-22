import { createContext, useEffect, useState } from "react";
import { EquipmenteProps } from "../types"
import { Props } from '../types/equipmente'
import { Equipmente } from "../services";
import React from 'react';

export const ContextoEquipmente = createContext({} as EquipmenteProps)

export function Provider({ children }: any){
    const [ equipmente, setEquipmente ] = useState<Props[]>([]);
    const [loaded, setLoaded] = useState<boolean>(true);
    

    useEffect(() => {
        (async function () {
            const resp:any = await Equipmente.get()            
            setEquipmente(resp)
            setLoaded(false)
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

    const getEquipment = async(id: string) => {
      try{
        setLoaded(true)
        const getOne = await Equipmente.getOne(id) 
        return getOne
      }catch(err){
        console.error(err);
      }finally{
        setLoaded(false)
      }
    }
    

    return (
        <ContextoEquipmente.Provider value={{equipmente, setEquipmente, createEquipment, getEquipment ,loaded, setLoaded}}>
            {children}
        </ContextoEquipmente.Provider>
    )
}