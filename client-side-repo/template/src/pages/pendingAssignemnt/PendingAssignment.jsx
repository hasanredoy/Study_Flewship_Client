import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const PendingAssignment = () => {
  const [submittedAssignment, setSubmittedAssignment] = useState([]);
  const axiosUrl = useAxiosUrl();
  useEffect(() => {
    axiosUrl.get("/submittedAssignment").then((res) => {
      console.log(res.data);
      setSubmittedAssignment(res.data);
    });
  }, []);
  console.log(submittedAssignment);
  return (
    <div>
      <h2 className="mb-4 text-3xl text-center font-bold leading-tight">
        All Pending Assignments
      </h2>
      <div className="container p-2 mx-auto sm:p-4 border rounded-lg ">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            {/* <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup> */}
            <thead className="">
              <tr className="text-left text-xl font-bold border-b border-gray-500">

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
                submittedAssignment.map(assignment => <tr key={assignment._id} className="border-b  border-gray-700 ">
                <td className="p-3">
                 <h1>{assignment?.title}</h1>
                </td>
                <td className="p-3">
                  <p>{assignment?.name}</p>
                </td>
                <td className="p-3">
                  
                </td>
                <td className="p-3">
                  <h1>{assignment?.marks}</h1>
                </td>
                <td className="p-3 text-left">
                  <span className="px-3 py-1 font-semibold rounded-md bg-violet-400 text-gray-900">
                    <span>{assignment?.status}</span>
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button className=" btn ">Give Mark</button>
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
