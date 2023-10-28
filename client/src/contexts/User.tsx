import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import userApi from "../services/userApi";
import Navigation from "../components/Navigation";
import { User } from "../services"
import  Storage from 'expo-storage'
import UserProps from "../types/user";
import { Props } from "../types/user";
 
export const AuthContext = createContext({} as UserProps | any);
 
export const AuthProvider = ({children}:any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [ user, setUser ] = useState<Props[] | null>(null);
    const [loading, setLoading] = useState(true)
    const [ iconePerfil, setIconePerfil ] = useState(true)
    
 
    useEffect(() => {
      // (async function () {
      //   const resp: any = await User.get()
      //   setUser(resp)
      //   setLoading(false)
      // })
        const loadData = async () => {
          try {
            const recoveredUser = await Storage.getItem({key: 'userEmail'});	
            const recoveredToken = await Storage.getItem({key: 'token'});
    
            if (recoveredUser && recoveredToken) {
              userApi.defaults.headers.common['Authorization'] = `Bearer ${recoveredToken}`;
              userApi.defaults.withCredentials = true;
            }
          } catch (err) {
            console.error(err);
          }
          setLoading(false);
        };
    
        loadData();
      }, []);
    

    const login = async (email:string, password:string) => {
        try{
            //await axios.post(URIuser.LOGIN_USER, {userEmail: email, userPassword: password})
            User.postLogin({userEmail: email, userPassword: password})
            .then(async (res) => {
              
                if(res.error){
                  return
                }
                const loggedUser = res.userEmail
                const token = res.token
                const userName = res.userName
                const icone = res.icone
                const userCpf = res.userCpf
                const userMatricula = res.userMatricula
                const userTelefone = res.userTelefone
                const id = res.id
                
                setIconePerfil(icone)
                Storage.setItem({key: 'userEmail', value: loggedUser})
                Storage.setItem({key: 'token', value: token})
                Storage.setItem({key: "userType", value:"2"})
                Storage.setItem({key: "userName", value: userName})
                Storage.setItem({key: "userCpf", value: userCpf})
                Storage.setItem({key: "userMatricula", value: userMatricula})
                Storage.setItem({key: "userTelefone", value: userTelefone})
                Storage.setItem({key: "icone", value: icone})
                Storage.setItem({key: "userid", value: JSON.stringify(id)})
                console.log(await Storage.getItem({ key: 'userid' }) ?? "");

 
                userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                userApi.defaults.headers.common = { Authorization: `Bearer ${token}` }
                userApi.defaults.withCredentials = true
                setUser(loggedUser)
                // navigation.navigate('ListaEquipamento');
                console.log(token)
 
            })
            .catch((err) => {     
                Storage.removeItem({key: "userEmail"});
                Storage.removeItem({key:"token"});
                Storage.removeItem({key:"userType"});
                Storage.removeItem({key:"userName"});
                Storage.removeItem({key:"icone"});
                Storage.removeItem({key: "userCpf"})
                Storage.removeItem({key: "userMatricula"})
                Storage.removeItem({key: "userTelefone"})
                Storage.removeItem({key: "userid"})
            
                alert("Usuário ou senha incorreto!")
                //avisoErroLogin()
            })
        }catch(err){
          throw err
        }

    }
 
    
    const logout = () => {
        Storage.removeItem({key: "userEmail"});
        Storage.removeItem({key:"token"});
        Storage.removeItem({key:"userType"});
        Storage.removeItem({key:"userName"});
        Storage.removeItem({key:"icone"});
        Storage.removeItem({key: "userCpf"})
        Storage.removeItem({key: "userMatricula"})
        Storage.removeItem({key: "userTelefone"})
        Storage.removeItem({key: "userid"})
        userApi.defaults.headers.common['Authorization'] = '';
        userApi.defaults.headers.common = { Authorization: `` }
        userApi.defaults.withCredentials = false
        setUser(null);
        setAuthenticated(false);
        // navigation.navigate('Login');
    }

    const createUser = async (newUser: Props) => {
      try {
          await User.postUser(newUser);
      } catch (error) {
          console.log('Erro ao criar usuário:', error);
      }
  }  
 
    return (
      <AuthContext.Provider value={{authenticated: Boolean(user), user, loading , logout, login, createUser, iconePerfil}}>
        {children}
      </AuthContext.Provider>
    )
}
 

// export const Private = ({ children }:any) => {
//     const { authenticated, loading } = useContext(AuthContext);
 
//     if(loading){
//         return <div className="loading">Carregando...</div>
//     }
//     if(!authenticated){
//         return <Navigator to={"/login"}/> 
//     }
 
//     return children;
 
// }
 
