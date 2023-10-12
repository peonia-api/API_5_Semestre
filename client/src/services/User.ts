
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
    id: number
    userName: string,
    userEmail: string,
    userType: UserType,
    userPassword: string,
    token: string,
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
            return data
        } catch (err) {
            throw err
        }
    }
    async getOneEmail(email: string): Promise<Props> {
        try {
            const { data } = await userApi.get(`/user/especificoEmail/${email}`)
            return data
        } catch (err) {
            throw err
        }
    }
    async getEspecificUser(id: string): Promise<Props> {
        try {
            const { data } = await userApi.get(`/user/especificoUser/${id}`)
            return data
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


    async putUser(id: string, body: Props): Promise<Props> {
        try {
            const res = await userApi.put(`/user/modifyUser/${id}`, body)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async patchPassword(body: PropsPassword): Promise<PropsPassword> {
        try {
            const res = await userApi.put(`/user/redefinirSenha`, body)
            return res.data
        } catch (err) {
            throw err
        }
    }

    async putProfile(id: string, body: Props): Promise<Props> {
        try {
            const res = await userApi.put(`/user/perfil/${id}`, body)
            return res.data
        } catch (err) {
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

}

export default new User()