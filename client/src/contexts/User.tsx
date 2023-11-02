import { createContext, useEffect, useState } from "react";
import React from 'react';
import userApi from "../services/userApi";
import User from "../services/User"
import  Storage from 'expo-storage'
import UserProps from "../types/user";
import { Props } from "../types/user";
 
export const AuthContext = createContext({} as UserProps | any);
 
export const AuthProvider = ({children}:any) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [ user, setUser ] = useState<Props[] | null>(null);
    const [listUser, setListUser] = useState<Props[] | null>(null);
    const [loading, setLoading] = useState(true)
    const [ iconePerfil, setIconePerfil ] = useState(true)
    const [ userType, setUserType ] = useState<string>()

    
 
    useEffect(() => {
      (async function () {
        const resp: any = await User.get()
        setListUser(resp)
        setLoading(false)
      })()
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
    
    const getUser = async (id: string) => {
        try {
          setLoading(true)
          const getOne = await User.getEspecificUser(id)
          console.log(getOne);
          return getOne
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false)
        }
    }

    const login = async (email:string, password:string) => {
        try{
            //await axios.post(URIuser.LOGIN_USER, {userEmail: email, userPassword: password})
            User.postLogin({userEmail: email, userPassword: password})
            .then(async (res) => {
                const loggedUser = res.userEmail
                const token = res.token
                const userName = res.userName
                const icone = res.icone
                const userCpf = res.userCpf
                const userMatricula = res.userMatricula
                const userTelefone = res.userTelefone
                const id = res.id
                const userType = res.userType
                setUserType(userType.toString());
                
                
                setIconePerfil(icone)
                userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                userApi.defaults.headers.common = { Authorization: `Bearer ${token}` }
                userApi.defaults.withCredentials = true
                setUser(loggedUser)
                Storage.setItem({key: 'userEmail', value: loggedUser})
                Storage.setItem({key: 'token', value: token})
                Storage.setItem({key: "userType", value: userType.toString()})
                Storage.setItem({key: "userName", value: userName})
                Storage.setItem({key: "userCpf", value: userCpf})
                Storage.setItem({key: "userMatricula", value: userMatricula})
                Storage.setItem({key: "userTelefone", value: userTelefone})
                Storage.setItem({key: "icone", value: icone})
                Storage.setItem({key: "userid", value: JSON.stringify(id)})

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

      <AuthContext.Provider value={{authenticated: Boolean(user), user, loading, setLoading, logout, login, createUser, listUser, iconePerfil, userType, getUser}}>
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
 
