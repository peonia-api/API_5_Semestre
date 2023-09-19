import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.16:3001',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api