import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import userApi from "../services/userApi";
import Navigation from "../components/Navigation";
import User from "../services/User"
import  Storage from 'expo-storage'


 
 
export const AuthContext = createContext({} as any);
 
export const AuthProvider = ({children}:any) => {
    // const navigate = useNavigation();
    const [ user, setUser ] = useState(null)
    const [loading, setLoading] = useState(true)
 
    useEffect(() => {
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
    

    const login = async (email:string, password:string, { navigation }: any) => {
        try{
            //await axios.post(URIuser.LOGIN_USER, {userEmail: email, userPassword: password})
            User.postLogin({userEmail: email, userPassword: password})
            .then((res) => {
                const loggedUser:any = res.userEmail
                const token = res.token
                const userName = res.userName
                const icone = res.icone
 
                Storage.setItem({key: 'userEmail', value: JSON.stringify(loggedUser)})
                Storage.setItem({key: 'token', value: token})
                Storage.setItem({key: "userType", value:"2"})
                Storage.setItem({key: "userName", value: userName})
                Storage.setItem({key:"icone", value: icone})
                console.log(res);

 
                userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                userApi.defaults.headers.common = { Authorization: `Bearer ${token}` }
                userApi.defaults.withCredentials = true
                setUser(loggedUser)
                navigation.navigate('ListaEquipamento');
 
            })
            .catch((err) => {     
                Storage.removeItem({key: "userEmail"});
                Storage.removeItem({key:"token"});
                Storage.removeItem({key:"userType"});
                Storage.removeItem({key:"userName"});
                Storage.removeItem({key:"icone"});
                //avisoErroLogin()
            })
        }catch(err){
 
        }

    }
 
    
    const logout = ({ navigation }: any) => {
        Storage.removeItem({key: "userEmail"});
        Storage.removeItem({key:"token"});
        Storage.removeItem({key:"userType"});
        Storage.removeItem({key:"userName"});
        Storage.removeItem({key:"icone"});
        userApi.defaults.headers.common['Authorization'] = '';
        userApi.defaults.headers.common = { Authorization: `` }
        userApi.defaults.withCredentials = false
        setUser(null);
        navigation.navigate('Login');
    }
 
    return (
<AuthContext.Provider value={{authenticated: Boolean(user), user, loading , logout, login}}>
 
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
 
