import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";


const useAuth = () => {
    const {user} = useContext(AuthContext)
    return user;
};

export default useAuth;