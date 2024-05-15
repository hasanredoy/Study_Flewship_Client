
import { useLoaderData} from "react-router-dom";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { AuthContext } from "../../authProvider/AuthProvider";


const UpdateAssignment = () => {
 
  const axiosUrl = useAxiosUrl()

  const assignment = useLoaderData()



   console.log(assignment);
  const [startDate, setStartDate] = useState(new Date(assignment?.date));
  

 

  
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const levels = form.levels.value;
    const date = startDate;
    const photoURL = form.photo.value;
    const description = form.description.value;
    if(date < new Date()){
      
      return toast.error('Invalid Date')
    }
    const assignmentData = {
      title,
      levels,
      marks,
      date,
      photoURL,
      description,
     
    };
// console.log(assignmentData);
    axiosUrl.put(`/assignments/${assignment._id}` , assignmentData)
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
      <div className=" bg-base-300 my-9 rounded-md">
        <h1 className=" text-3xl font-bold text-center py-5 ">
         Update This Assignment ?{" "}
        </h1>
        <form onSubmit={handleForm} className="card-body">
          {/* 1 row  */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full ">
           
              {/* title */}
              <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered bg-white text-black w-full"
                required
                name="title"
                defaultValue={assignment.title}
              />
            </div>
            
         
          </div>

          {/* 2 row */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full ">
            {/* input marks   */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Marks</span>
              </label>
              <input
                type="text"
                placeholder="Marks"
                className="input input-bordered bg-white text-black w-full"
                required
                name="marks"
                defaultValue={assignment?.marks}
              />
            </div>

            {/* photo  */}
            <div className="form-control md:w-full">
              <label className="label">
                <span className="text-xl font-bold">Thumbnail Image URL</span>
              </label>
              <input
                type="url"
                placeholder="URL"
                className="input input-bordered bg-white text-black w-full"
                required
                defaultValue={assignment?.photoURL}
                name="photo"
              />
            </div>
          </div>
          {/* 3 row  */}
          <div className="flex flex-col lg:flex-row gap-5 w-full ">
            {/* date  */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Due Date</span>
              </label>
           
              
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            
            </div>

            {/* Difficulty Level*/}

            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-bold">Difficulty Level</span>
              </label>
              <select defaultValue={assignment.levels} className="bg-white text-black py-2 rounded-md" name="levels" id="">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
          {/* description */}
          <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-bold"> Description</span>
              </label>
            <textarea 
            rows={6}
             className=" p-3 bg-white text-black w-full"
             required
             defaultValue={assignment?.description}
             name="description"
            ></textarea>
            </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-success btn-block">
              Create Assignment{" "}
            </button>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UpdateAssignment;