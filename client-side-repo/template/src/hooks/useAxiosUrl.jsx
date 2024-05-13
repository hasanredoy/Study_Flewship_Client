import axios from 'axios'


const axiosUrl = axios.create({
  baseURL:'http://localhost:5000',
  // baseURL:'http://localhost:5000',
  withCredentials:true,
})
const useAxiosUrl = () => {

  return axiosUrl
};

export default useAxiosUrl;