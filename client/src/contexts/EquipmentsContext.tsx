import { createContext, useEffect, useState } from "react";
import { EquipmenteProps } from "../types"
import { Props } from '../types/equipmente'
import { Equipmente } from "../services";
import React from 'react';
import { LocationObject, getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";

export const ContextoEquipmente = createContext({} as EquipmenteProps)

export function Provider({ children }: any) {
  const [equipmente, setEquipmente] = useState<Props[]>([]);
  const [loaded, setLoaded] = useState<boolean>(true);
  const [ list10km, setList10km ] = useState<Props[]>([])


  useEffect(() => {
    (async function () {
      const resp: any = await Equipmente.get()
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

  const getEquipment = async (id: string) => {
    try {
      setLoaded(true)
      const getOne = await Equipmente.getOne(id)
      console.log(getOne);

      return getOne
    } catch (err) {
      console.error(err);
    } finally {
      setLoaded(false)
    }
  }


  const putEquipment = async (uuid: string, updatedEquipment: Props) => {
    try {
      const updated = await Equipmente.put(uuid, updatedEquipment);
      //console.log('Equipamento atualizado com sucesso');
      //const updated = await getEquipment(uuid);

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
      await Equipmente.put
    }
  };

  const patchStatus = async (uuid: string, updatedEquipment: string) => {
    try {
      setLoaded(true);
      await Equipmente.patch(uuid, updatedEquipment)
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
      console.error('Erro ao atualizar o Status:', err);
    } finally {
      setLoaded(false);
    }
  }

  const get10 = async() => {
    try{
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLoaded(true);      
        const data:any = await Equipmente.get10km(Number(currentPosition.coords.latitude), Number(currentPosition.coords.longitude))
        setList10km(data)
      }
    }catch(err){
      console.error("Erro", err)
    }finally{
      setLoaded(false);
    }
  }


  return (
    <ContextoEquipmente.Provider value={{ equipmente, setEquipmente, createEquipment, getEquipment, putEquipment, loaded, setLoaded, patchStatus, get10, list10km }}>
      {children}
    </ContextoEquipmente.Provider>
  )
}