import axios from "axios";

const api = axios.create({
    baseURL: '',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api