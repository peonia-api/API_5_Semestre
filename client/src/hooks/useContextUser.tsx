import { useContext } from 'react'
import { AuthContext } from '../contexts'

export default function useContextoEquipmente(){
    const contextAuth = useContext(AuthContext)
    return contextAuth
}