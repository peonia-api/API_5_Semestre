import axios from "axios";

const api = axios.create({
    baseURL: 'http://40.76.189.93:5000',
    timeout: 1000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api
