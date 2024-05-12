import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const location = useLocation()
  const {user , loading , setLoading}=useContext(AuthContext)
 if(loading){
  return   <div className="flex justify-center w-full ">
 <span className="loading loading-spinner loading-lg text-center "></span>
 </div>
 }
  if(!user){
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
  }
  return children
};

export default PrivetRoute;