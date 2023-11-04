import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const{user,loading}=useState([])
    const loacation=useLocation()
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;