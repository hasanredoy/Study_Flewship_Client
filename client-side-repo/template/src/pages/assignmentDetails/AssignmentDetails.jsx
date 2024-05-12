import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { ToastContainer, toast } from "react-toastify";

const AssignmentDetails = () => {
  const singleData = useLoaderData();
  const axiosUrl = useAxiosUrl()
  const {user} = useContext(AuthContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    const note = e.target.textArea.value
    const pdf = e.target.doc.value
    const userEmail = user.email
    const access = user.accessToken
    console.log(note,pdf);
    const data ={
      pdf,
      note,
      userEmail,
      access,
      status:'Pending',
      title:singleData.title,
      marks: singleData.marks,
      name: user?.displayName
    }
    axiosUrl.post('/submittedAssignment',data)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        toast.success('Submitted Successfully')
      }
    })
  }
  return (
    <div>
      <h1 className=" font-bold text-3xl text-center my-10">
        Assignment <span className=" text-orange-700">{singleData.title}</span>
      </h1>
      <div className="card  card-side bg-base-200  flex-col lg:flex-row p-2">
        <figure className=" w-full lg:w-[48%] h-56 lg:h-full rounded-lg ">
          <img
            className=" h-full w-full"
            src={singleData?.photoURL}
            alt="banner image"
          />
        </figure>
        <div className="divider divider-horizontal"></div>
        <div className="  pl-2 w-full lg:w-[48%] ">
          <h2 className="card-title mb-5 text-xl md:text-2xl font-bold hover:underline">
            {singleData?.title}
          </h2>
          <p className="">{singleData?.description}</p>
          <div className="divider"></div>
          <div className=" flex justify-between ">
            <h2 className=" text-base lg:text-xl font-semibold  ">
              Difficulty Level:{" "}
              <span className=" text-green-500 font-bold">
                {singleData.levels}
              </span>
            </h2>
            <h2 className=" text-base lg:text-xl font-semibold  ">
              Marks:{" "}
              <span className=" text-red-600 font-bold">
                {singleData.marks}
              </span>
            </h2>
          </div>
          <div className="divider"></div>
          <h3 className=" text-base font-semibold my-5">
            Submission Data:{" "}
            <span className=" text-fuchsia-600">{Date(singleData.date)}</span>
          </h3>
          <div>
           
              <button
                className="btn btn-block text-xl font-bold my-5 btn-success btn-outline"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Take Assignment
              </button>
           
            {/*  modal */}

             <form onSubmit={handleSubmit} >
             <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-4xl">
                <h1 className="text-xl lg:text-2xl text-center font-bold">Submit Your&apos;e Assignment PDF / Document Link Blew</h1>
                <div className="divider"></div>
                  {/* doc url */}
            <div className="form-control md:w-full">
              <label className="label">
                <span className="text-base font-semibold">PDF/DOC URL</span>
              </label>
              <input
                type="url"
                placeholder="URL"
                className="input input-bordered bg-white text-black w-full"
                required
                name="doc"
              />
            </div>
                <div className=" my-5">
                  <label className=" text-base font-semibold my-5">

                    Write Some Notes
                  </label>
                  <br />
                  <textarea className="w-full p-5 border border-gray-200" name="textArea"  cols rows={5} ></textarea>
                </div> 
                <button type="submit" className="btn  btn-info  text-white">Submit</button>
                <div className="modal-action ">
                  <form method="dialog">
                   <button className="btn btn-warning">close</button>
                  </form>
                </div>
              </div>
            </dialog>
             </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AssignmentDetails;
