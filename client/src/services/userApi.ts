import axios from "axios";

const userApi = axios.create({
  baseURL: 'http://40.76.189.93:3000',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default userApi;
