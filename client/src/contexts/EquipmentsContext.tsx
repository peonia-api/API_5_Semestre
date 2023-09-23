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
        console.log(getOne);
        
        return getOne
      }catch(err){
        console.error(err);
      }finally{
        setLoaded(false)
      }
    }


const putEquipment = async (uuid: string, updatedEquipment: Props) => {
  try {
    setLoaded(true);
    await Equipmente.put(uuid, updatedEquipment);
    console.log('Equipamento atualizado com sucesso');
    const updated = await getEquipment(uuid);
    
    if (updated) {
      setEquipmente((prevEquipmente) => {
        const updatedIndex = prevEquipmente.findIndex((item) => item._id === updated._id);
        if (updatedIndex !== -1) {
          const updatedList = [...prevEquipmente];
          updatedList[updatedIndex] = updated;
          return updatedList;
        }
        return prevEquipmente;
      });
    }
  } catch (err) {
    console.error('Erro ao atualizar equipamento:', err);
  } finally {
    setLoaded(false);
  }
};

    
    
    

    return (
      <ContextoEquipmente.Provider value={{ equipmente, setEquipmente, createEquipment, getEquipment, putEquipment, loaded, setLoaded }}>
      {children}
    </ContextoEquipmente.Provider>
    )
}