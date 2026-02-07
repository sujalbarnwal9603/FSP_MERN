import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";

function RefreshHandler({setIsAuthenticated}){
    const location=useLocation();
    const navigate= useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token"))
        {
            setIsAuthenticated(true);
            if(location.pathname==='/' || location.pathname==='/login' ){
                navigate('/home', {replace:false})
            }
        }
    })
}

export default RefreshHandler;