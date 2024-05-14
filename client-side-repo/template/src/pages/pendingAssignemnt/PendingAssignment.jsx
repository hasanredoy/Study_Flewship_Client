import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { Link } from "react-router-dom";

const PendingAssignment = () => {
  const [loading , setLoading ] = useState(true)
  const [submittedAssignment, setSubmittedAssignment] = useState([]);
  const [modal, setModal] = useState(false);
  const axiosUrl = useAxiosUrl();
  useEffect(() => {
    axiosUrl.get("/submittedAssignment").then((res) => {
      // console.log(res.data);
      setSubmittedAssignment(res.data);
      setLoading(false)
    });
  }, []);

  const newSubmittedAssignment = submittedAssignment.filter(
    (assignment) => assignment.status === "Pending"
  );
  // console.log(submittedAssignment);
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center font-bold leading-tight">
        All Pending Assignments
      </h2>

      <div className="container bg-base-100 p-2 mx-auto sm:p-4 border rounded-lg ">
        <div className="overflow-x-auto">
        
          <table className="min-w-full text-xs">
            <thead className="">
              <tr className="text-left text-base md:text-xl font-bold border-b border-gray-500">
                <th className="p-3 border-r border-gray-500">Title</th>
                <th className="p-3 border-r border-gray-500">Examinee Name </th>
                <th className="p-3 border-r border-gray-500">Marks</th>
                <th className="p-3 border-r border-gray-500">Status</th>
                <th className="p-3"></th>
                <th className="p-3 text-right"></th>
              </tr>
            </thead>
            
            <tbody>
              {newSubmittedAssignment?.map((assignment) => (
                <tr
                  key={assignment._id}
                  className="border-b  border-gray-400 text-xs md:text-lg font-medium "
                >
                  <td className="p-3 font-bold border-r border-gray-500">
                    <h1>{assignment?.title}</h1>
                  </td>
                  <td className="p-3 border-r border-gray-500">
                    <p>{assignment?.name}</p>
                  </td>

                  <td className="p-3 border-r border-gray-500">
                    <h1>{assignment?.marks}</h1>
                  </td>
                  <td className="p-3 text-left border-r border-gray-500">
                    <span className="px-3 py-1 font-semibold rounded-md bg-yellow-400 text-gray-900">
                      <span>{assignment?.status}</span>
                    </span>
                  </td>
                  <td className="p-3 border-r border-gray-500">
                    <button onClick={()=>setModal(true)} className=" btn">Preview</button>
                  </td>

                  {modal && <div className=" z-40 bg-purple-100 absolute top-[30%] left-2 lg:left-[30%] border border-yellow-400 w-[95%] rounded-lg lg:w-[600px] h-[400px] ">
                    <div className=" flex justify-end">
                    <button  onClick={()=>setModal(false)} className=" btn  btn-circle  text-2xl font-bold">X</button>
                    </div>
                    <div className="divider"></div>
                    <iframe className=" w-full h-[95%]" src={assignment?.pdf} frameborder="0"></iframe>
                    </div>}
                 
                  <td className="p-3 text-right">
                    <Link to={`/pendingAssignment/${assignment._id}`}>
                      <button className=" btn bg-green-500 text-white">
                        Give Mark
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
            <div className="flex justify-center w-full ">
        {loading && (
          <span className="loading loading-spinner loading-lg text-center "></span>
        )}
      </div>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignment;
