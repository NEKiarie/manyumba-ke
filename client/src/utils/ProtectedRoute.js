import { useContext } from "react";
import { Outlet, Navigate } from 'react-router-dom';
import cookie from 'js-cookie';
import { HouseContext } from "../components/HouseContext";

const ProtectedRoute  = () => {
    const { user } = useContext(HouseContext);
    const authToken = cookie.get("_session_id")
    console.log(authToken)
    console.log(authToken ? authToken : "no token")
    console.log(user)
    return (
        authToken ? <Outlet /> : <Navigate to="/" /> 
    )    

}

export default ProtectedRoute;