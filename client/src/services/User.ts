
import auth from './auth'
import userApi from './userApi'

enum UserType {
    Admin = 1,
    Comum = 2
}
interface Login {
    userEmail: string,
    userPassword: string
}

export interface Props {
    id: number,
    userCpf: string,
    userMatricula: string,
    userTelefone: string,
    userName: string,
    userEmail: string,
    userType: UserType,
    userPassword: string,
    token: string,
    icone: string,
    status: number,
}

interface PropsProfile {
    userCpf: string,
    userMatricula: string,
    userTelefone: string,
    userName: string,
    userEmail: string,
    icone: string,
}

export interface PropsPassword {
    userEmail: string,
    userPassword: string,
}
class User {
    async get(): Promise<Props[]> {
        try {
            const { data } = await userApi.get('/user/historicUser')
            return data
        } catch (err) {
            console.error("Deu erro Aqui");
            throw err
        }
    }

    async getOneId(): Promise<Props> {
        try {
            const { data } = await userApi.get(`/user/especificId/`)
            console.log("aaaaaaah" + data)
            return data
        } catch (err) {
            throw err
        }
        
    }
    async getOneEmail(email: string): Promise<Props | any> {
        try {
            const { data } = await userApi.get(`/user/especificoEmail/${email}`)
            return data
        } catch (err) {
            throw err
        }
        
    }
    async getEspecificUser(id: string): Promise<Props> {
        try {
            const res = await userApi.get(`/user/especificoUser/${id}`)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async postLogin(body: Login): Promise<Props| any> {
        try {
            const res = await userApi.post('/user/login', body)
            return res.data
        } catch (err) {
            throw err
        }
    }
    async postUser(body: Props): Promise<Props> {
        try {
            const res = await userApi.post('/user/createUser', body)
            return res.data
        } catch (err) {
            throw err
        }
    }


    async putUser(id: string, body: PropsProfile): Promise<Props> {
        try {
            const res = await userApi.put(`/user/modifyUser/${id}`, body)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async patchPassword(body: PropsPassword): Promise<Props> {
        try {
            const res = await userApi.put(`/user/redefinirSenha`, body)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async putProfile(id: string, body: PropsProfile): Promise<Props> {
        try {
            const res = await userApi.put(`/user/perfil/${id}`, body)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async patchStatus(email: string, body: {status: number}): Promise<Props | any>{
        try{
            const res = await userApi.patch(`/user/alterStatus/${email}`, body)
            return res.data
        }catch(err){
            throw err
        }
    }

    async getAuthEmail(userEmail: string): Promise<Props> {
        try {
            const res = await auth.get(`/auth2fa_email/${userEmail}`)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async getVerificaCodigo(userEmail: string, codigo: string): Promise<Props> {
        try {
            const res = await auth.get(`/auth2fa/getEmail/${userEmail}/${codigo}`)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async getEmailStatus(email: string, status: string){
        try{
            const res = await auth.get(`/status/${email}/${status}`)
            return res.data
        }catch(err){
            throw err
        }
    }

}

export default new User()