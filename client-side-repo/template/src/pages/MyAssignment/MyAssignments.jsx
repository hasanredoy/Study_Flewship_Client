import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const MyAssignments = () => {
  const [loading , setLoading] = useState(true)
  const [myAssignments, setMyAssignment] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosUrl = useAxiosUrl();
  // console.log(user.email);
  useEffect(() => {
    axiosUrl.get(`/submittedAssignment?email=${user?.email}`)
    // axiosUrl.get(`submittedAssignment?email=hkjhj`)
    .then((res) => {
      setMyAssignment(res.data);
      setLoading(false)
    });
  }, [user]);
  // console.log(myAssignments);
  return (
    <div className="  flex flex-col md:flex-row-reverse gap-3">
      {/* user profile   */}
      <div className=" w-full  md:w-[40%] lg:w-[30%] bg-slate-800  flex justify-center items-center flex-col p-3 lg:p-5 rounded-lg space-y-3 h-full">
        <img className=" rounded-full w-[150px]" src={user?.photoURL} alt="" />
        <div className="divider"></div>
        <h1 className=" text-white text-xl font-bold">
          WellCome{" "}
          <span className=" text-yellow-400">
            {user?.displayName.toUpperCase()}
          </span>
        </h1>
      </div>
      {/* Assigment div  */}
      <div className="divider block md:hidden"></div>
      <div className=" flex rounded-md justify-center flex-col border-0 md:border border-gray-400 bg-base-300 w-full md:w-[70%] p-3 ml-0 md:ml-2 lg:ml-0">
        <h1 className=" text-2xl mb-9 text-center mx-auto font-bold">
          {myAssignments.length > 0
            ? "My Attempted Assignments"
            : "You Don't Have Any Submitted Assignment"}
        </h1>
        <div className="flex justify-center w-full ">
        {loading && (
          <span className="loading loading-spinner loading-lg text-center "></span>
        )}
      </div>
        <div className=" grid justify-center items-center mx-auto grid-cols-1  gap-5 ">
          {myAssignments?.map((myAssig,index) => (
            <div
              key={myAssig._id}
              className=" w-full lg:w-[800px] border border-lime-500 rounded-lg bg-gradient-to-t from-lime-200 via-slate-300 to-purple-300 text-black  p-5 "
            >
              <h1 className=" text-2xl text-black pb-3">{index+1}.</h1>
              <h1  className=" text-xl  font-bold">{myAssig.title}</h1>
              <div className=" my-5">
                <h2 className=" text-lg font-bold my-5">
                  Status:{" "}
                  <span className=" bg-sky-200 text-blue-700 rounded-full px-3 py-1">
                    {myAssig.status}
                  </span>
                </h2>
                <h2 className=" font-semibold">
                  {" "}
                  Marks For This Assignment:{" "}
                  <span className=" text-red-600">{myAssig.marks}</span>
                </h2>

                {myAssig?.obtainedMarks && (
                  <div>
                    <div className="divider"></div>
                    <h2 className=" font-semibold">
                      Marks I get :{" "}
                      <span className=" text-green-600">
                        {myAssig.obtainedMarks}
                      </span>
                    </h2>
                  </div>
                )}

                <div className=" my-3">
                  {myAssig?.Feedback && (
                    <div>
                      {/* <div className="divider"></div> */}
                      <h2 className=" font-semibold">
                        <span className=" font-bold ">
                          Examiner Feedback :
                        </span> {' '}
                        {myAssig?.Feedback}
                      </h2>
                    </div>
                  )}
                </div>
              </div>
              <div className="divider divider-neutral"></div>
              <iframe
                className=" border border-red-300 max-w-full lg:max-w-[800px] w-full overflow-y-auto h-[400px]"
                src={myAssig.pdf}
                frameborder="0"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAssignments;
