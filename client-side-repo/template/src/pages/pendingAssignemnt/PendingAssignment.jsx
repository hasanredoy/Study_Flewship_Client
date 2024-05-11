import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const PendingAssignment = () => {
  const [submittedAssignment,setSubmittedAssignment]=useState([])
  const axiosUrl = useAxiosUrl()
useEffect(()=>{
  axiosUrl.get('/submittedAssignment')
  .then(res=>{
    console.log(res.data);
     setSubmittedAssignment(res.data)
  })
},[])
  console.log(submittedAssignment);
  return (
    <div>
      
    </div>
  );
};

export default PendingAssignment;