import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import './assignmet.css'
// date picker
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());
   const axiosUrl = useAxiosUrl()
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log(user.accessToken);
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
      email: user?.email,
      accessTok : user?.accessToken
    };

    axiosUrl.post('/assignments' , assignmentData)
    //   
      .then(res => {
        // console.log(res.data);
        if (res.data?.insertedId) {
          toast.success('Assignment Created Successfully')

          }
        });
  };

  return (
    <div>
      <div className=" bg-base-300 my-9 rounded-md">
        <h1 className=" text-3xl font-bold text-center py-5 ">
         Create an Assignment ?{" "}
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
              <select className="bg-white text-black py-2 rounded-md" name="levels" id="">
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
             className="p-3 bg-white text-black w-full"
             required
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

export default CreateAssignment;
