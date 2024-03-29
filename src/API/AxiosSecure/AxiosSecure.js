import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://contest-hub-server-five.vercel.app',
    withCredentials: true
})