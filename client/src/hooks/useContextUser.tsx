import { useContext } from 'react'
import { AuthContext } from '../contexts'

export default function useContextoUser(){
    const contextAuth = useContext(AuthContext)
    return contextAuth
}