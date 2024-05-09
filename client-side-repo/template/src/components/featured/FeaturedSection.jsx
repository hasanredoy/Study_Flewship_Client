import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const FeaturedSection = () => {
  const axiosUrl = useAxiosUrl()
  const [data , setData ]= useState([])
  useEffect(()=>{
    axiosUrl.get('/features')
    .then(res=> {
      setData(res.data)
    })
  },[])
  console.log(data);
  return (
    <div>
      
    </div>
  );
};

export default FeaturedSection;