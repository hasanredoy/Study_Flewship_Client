import axios from 'axios'


const axiosUrl = axios.create({
  // baseURL:'http://localhost:5000',
  baseURL:'https://crud-jwt-server-two.vercel.app',
  withCredential:true,
})
const useAxiosUrl = () => {
  return axiosUrl
  
};

export default useAxiosUrl;