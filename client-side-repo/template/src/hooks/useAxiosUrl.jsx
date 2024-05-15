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


const useAxiosUrl = () => {

  return axiosUrl
};

export default useAxiosUrl;