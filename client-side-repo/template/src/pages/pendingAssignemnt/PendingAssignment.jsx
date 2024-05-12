import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { Link } from "react-router-dom";

const PendingAssignment = () => {
  const [submittedAssignment, setSubmittedAssignment] = useState([]);
  const axiosUrl = useAxiosUrl();
  useEffect(() => {
    axiosUrl.get("/submittedAssignment").then((res) => {
      console.log(res.data);
      setSubmittedAssignment(res.data);
    });
  }, []);

   const newSubmittedAssignment = submittedAssignment.filter(assignment => assignment.status === "Pending")
  console.log(submittedAssignment);
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center font-bold leading-tight">
        All Pending Assignments
      </h2>
      <div className="container bg-base-300 p-2 mx-auto sm:p-4 border rounded-lg ">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            
            <thead className="">
              <tr className="text-left text-lg md:text-xl font-bold border-b border-gray-500">

                <th className="p-3">Title</th>
                <th className="p-3">Examinee Name </th>
                <th className="p-3"></th>
                <th className="p-3">Marks</th>
                <th className="p-3">Status</th>
                <th className="p-3 text-right"></th>
              </tr>
            </thead>
            <tbody>
              {
                newSubmittedAssignment?.map(assignment => <tr key={assignment._id} className="border-b  border-gray-400 text-base md:text-lg font-medium ">
                <td className="p-3 font-bold border-r lg:border-r-0 border-gray-400">
                 <h1>{assignment?.title}</h1>
                </td>
                <td className="p-3  border-r lg:border-r-0 border-gray-400">
                  <p>{assignment?.name}</p>
                </td>
                <td className="p-3 ">
                  
                </td>
                <td className="p-3  border-r lg:border-r-0 border-gray-400">
                  <h1>{assignment?.marks}</h1>
                </td>
                <td className="p-3 text-left  border-r lg:border-r-0 border-gray-400">
                  <span className="px-3 py-1 font-semibold rounded-md bg-yellow-400 text-gray-900">
                    <span>{assignment?.status}</span>
                  </span>
                </td>
                <td className="p-3 text-right">
                <Link to={`/pendingAssignment/${assignment._id}`}>
                <button  className=" btn bg-green-500 text-white">Give Mark</button>
                </Link>
                </td>
              </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingAssignment;
