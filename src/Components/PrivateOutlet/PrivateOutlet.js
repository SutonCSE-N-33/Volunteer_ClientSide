import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation} from "react-router-dom";
import { userContext } from "../../App";



export default function PrivateOutlet(){
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
 
  

    return loggedInUser.email?<Outlet />:<Navigate to="/login" />
}