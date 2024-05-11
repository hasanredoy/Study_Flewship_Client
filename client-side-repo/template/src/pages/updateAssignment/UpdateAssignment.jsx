
import { useLoaderData } from "react-router-dom";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import useAxiosUrl from "../../hooks/useAxiosUrl";


const UpdateAssignment = () => {
  const assignment = useLoaderData()
  const [startDate, setStartDate] = useState(new Date(assignment.date));
  
  console.log(assignment);
  const axiosUrl = useAxiosUrl()
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const marks = form.marks.value;
    const levels = form.levels.value;
    const date = startDate;
    const photoURL = form.photo.value;
    const description = form.description.value;
    const assignmentData = {
      title,
      levels,
      marks,
      date,
      photoURL,
      description,
     
    };
console.log(assignmentData);
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
                defaultValue={assignment.title}
                className="input input-bordered bg-white text-black w-full"
                required
                name="title"
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
                defaultValue={assignment.photoURL}
                className="input input-bordered bg-white text-black w-full"
                required
                name="photo"
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
                defaultValue={assignment.marks}
                className="input input-bordered bg-white text-black w-full"
                required
                name="marks"
              />
            </div>

            {/* description */}
            <div className="form-control w-full">
              <label className="label">
                <span className="text-xl font-bold"> Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                defaultValue={ assignment.description}
                className="input input-bordered bg-white text-black w-full"
                required
                name="description"
              />
            </div>
          </div>
          {/* 3 row  */}
          <div className="flex flex-col lg:flex-row gap-5 w-full ">
            {/* price  */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Due Date</span>
              </label>
           
              
              <DatePicker
              // value={assignment.date}
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
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-success btn-block">
              Update Assignment{" "}
            </button>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default UpdateAssignment;