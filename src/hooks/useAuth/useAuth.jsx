import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";


const useAuth = () => {
    const {user, loading} = useContext(AuthContext)
    return [user, loading];
};

export default useAuth;