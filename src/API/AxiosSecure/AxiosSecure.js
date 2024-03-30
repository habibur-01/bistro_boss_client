import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth.jsx"

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
})
const useAxiosSecure = () =>{
    const navigate = useNavigate()
    const {userSignOut}= useAuth()
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    },function(error){
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    },async function(error){
        const status = error.response.status
        console.log('status error in the interceptors', status)
        if(status === 401 || status === 403){
            await userSignOut()
            navigate("/login")
        }
        return Promise.reject(error)
    })

    return axiosSecure
};
export default useAxiosSecure;