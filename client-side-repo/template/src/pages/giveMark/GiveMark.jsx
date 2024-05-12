import { CiKeyboard } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const GiveMark = () => {
  const axiosUrl = useAxiosUrl()
  const assignment = useLoaderData();
  const {user}= useContext(AuthContext)
  console.log(assignment);
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMark= e.target.mark.value
    const  Feedback= e.target.textArea.value
    const data ={
      pdf:assignment?.pdf,
      note:assignment?.note,
      userEmail:assignment?.userEmail,
      access:assignment?.access,
      status:'completed',
      title: assignment?.title,
      marks:assignment.marks,
      name: user?.displayName,
      obtainedMarks: newMark,
      Feedback
    }
    console.log(data);
    axiosUrl.put(`/submittedAssignment/${assignment._id}` , data)
    //   
      .then(res => {
        console.log(res.data);
        if (res.data?.modifiedCount>0) {
          toast.success('Assignment Updated Successfully')

          }
        });
  };
  return (
    <div>
      <h1 className="text-xl lg:text-2xl text-center font-bold">
        Give Mark to <span className=" text-red-500">{assignment.title}</span>
      </h1>
      <div className="divider"></div>
      <div className="font-bold my-10 px-3 ">
        <h3 className=" overflow-x-auto ">
          Assignment PDF file :{" "}
          <span className="max-w-[100px] text-blue-600 font-bold hover:underline">
            {assignment.pdf}
          </span>{" "}
        </h3>
        <div className="divider"></div>
        <h3 c>
          Assignment Notes :{" "}
          <a className=" text-green-600 font-bold ">
            {assignment.note}
          </a>{" "}
        </h3>
      </div>
        
       <div className=" bg-base-300 p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          {/* doc url */}
          <div className="form-control md:w-full">
            <label className="label">
              <span className="text-base font-semibold">Marks</span>
            </label>
            <input
              type="text"
              defaultValue={assignment.marks}
              className="input input-bordered bg-white text-black w-full"
              required
              name="mark"
            />
          </div>
          <div className=" my-5">
            <label className=" text-base font-semibold my-5">Feedback</label>
            <br />
            <textarea
              className="w-full p-5 border border-gray-200"
              name="textArea"
              cols
              rows={5}
              required
            ></textarea>
          </div>
          <div className=" flex justify-center">
          <button type="submit" className="btn  btn-accent  text-white">
            Submit
          </button>
          </div>
       
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default GiveMark;
