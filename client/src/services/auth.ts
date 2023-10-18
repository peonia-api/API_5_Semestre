import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.190.86.30:5000',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api