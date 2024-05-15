import axios from 'axios'
import { getAuth, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const axiosUrl = axios.create({
  // baseURL:'https://crud-jwt-server-two.vercel.app',
  baseURL:'https://crud-jwt-server-two.vercel.app',
  withCredentials:true,
})

const auth = getAuth(app)

const useAxiosUrl = () => {
  // const navigate =useNavigate()
 useEffect(()=>{
  axiosUrl.interceptors.response.use(res=>{
    return res
  },err=>{
    if(err.response.status===401||err.response.status===403){
      console.log('object');
      signOut(auth)
      .then(()=>{
        console.log('logged out');
        // navigate('/login')
      })
      .catch()
    }
  })
 },[])
  return axiosUrl
};

export default useAxiosUrl;