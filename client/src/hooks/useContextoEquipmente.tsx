import { useContext } from 'react'
import { ContextoEquipmente } from '../contexts'

export default function useContextoEquipmente(){
    const contextoEquipmente = useContext(ContextoEquipmente)
    return contextoEquipmente
}