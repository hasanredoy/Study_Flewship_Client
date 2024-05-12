import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const MyAssignments = () => {
  const [myAssignments, setMyAssignment]=useState([])
  const {user}=useContext(AuthContext)
  const axiosUrl  = useAxiosUrl()

  useEffect(()=>{
    axiosUrl.get(`submittedAssignment?email=${user?.email}`)
    .then(res=>{
      setMyAssignment(res.data)
    })
  },[])
 console.log(myAssignments);
  return (
    <div className="  flex gap-10">
      {/* user profile   */}
      <div className=" w-1/3 bg-base-300 flex justify-center items-center flex-col p-5 rounded-lg space-y-3">
        <img className=" rounded-full" src={user?.photoURL} alt="" />
        <div className="divider"></div>
        <h1 className=" text-xl font-bold">WellCome  <span className=" text-blue-800">{user?.displayName.toUpperCase()}</span></h1>

      </div>
      {/* Assigment div  */}
      <div className=" flex justify-center flex-col ">
        <h1 className=" text-2xl text-center mx-auto font-bold">{myAssignments.length>0?'My Attempted Assignments':"You Don't Have Any Submitted Assignment"}</h1>
        <div className=" grid grid-cols-2 ">
          {
            myAssignments?.map(myAssig => <div className="">
              <h1 className=" text-xl font-bold">Preview of Assignment</h1>
             <iframe src={myAssig.pdf} frameborder="0"></iframe>

            </div>)
          }
        </div>
      </div>
      
    </div>
  );
};

export default MyAssignments;