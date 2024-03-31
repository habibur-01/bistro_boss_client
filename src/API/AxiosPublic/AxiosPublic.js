import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: 'https://server-side-k6n8mb6ij-spark01.vercel.app',
    withCredentials: true
})