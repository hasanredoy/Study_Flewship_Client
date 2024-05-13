import axios from 'axios'


const axiosUrl = axios.create({
  baseURL:'https://crud-jwt-server-two.vercel.app',
  // baseURL:'https://crud-jwt-server-two.vercel.app',
  withCredentials:true,
})
const useAxiosUrl = () => {

  return axiosUrl
};

export default useAxiosUrl;