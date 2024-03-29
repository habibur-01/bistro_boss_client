import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../API/AxiosSecure/AxiosSecure";
import useAuth from "../useAuth/useAuth";


const useCart = () => {
    const{user}=useAuth()

    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn:async()=>{
           const res = await axiosSecure.get(`/carts?email=${user?.email}`);
           return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;