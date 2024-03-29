import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth"
import { PropTypes } from "prop-types";

const PrivateRoute = ({children}) => {
    
    const {user, loading} = useAuth()
    console.log(user)
    if(loading){
        return (<div className="w-full h-[60vh] flex justify-center items-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>)
    }
    if(user){
        {children}
    }


    return (
        
        <Navigate to={"/login"}></Navigate>
    );
};
PrivateRoute.propTypes={
    children: PropTypes.node
}
export default PrivateRoute;