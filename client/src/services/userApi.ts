import axios from "axios";

const userApi = axios.create({
  baseURL: 'http://172.190.86.30:3000',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userApi;
