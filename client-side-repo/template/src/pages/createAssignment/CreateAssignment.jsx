import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

// date picker
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useContext(AuthContext);
  console.log(user);
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
      email: user?.email
    };
console.log(assignmentData);
    // fetch(
    //   "https://pottery-and-ceramics-hub.vercel.app/allassignmentData",
    //   {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(assignmentData),
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       toast.success('Added Successfully')

    //       }
    //     });
  };

  return (
    <div>
      <div className=" bg-stone-400 my-9 rounded-md">
        <h1 className=" text-3xl font-bold text-center py-5 ">
          Add Some Art And Crafts{" "}
        </h1>
        <form onSubmit={handleForm} className="card-body">
          {/* 1 row  */}
          <div className=" flex flex-col lg:flex-row gap-5 w-full ">
            {/* photo  */}
            <div className="form-control md:w-full">
              <label className="label">
                <span className="text-xl font-bold">Thumbnail Image URL</span>
              </label>
              <input
                type="url"
                placeholder="URL"
                className="input input-bordered bg-white w-full"
                required
                name="photo"
              />
            </div>
            {/* title */}
            <div className="form-control  w-full">
              <label className="label">
                <span className="text-xl font-bold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input input-bordered bg-white w-full"
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
                className="input input-bordered bg-white w-full"
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
                className="input input-bordered bg-white w-full"
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
              {/*<input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full"
              required
              name="price"
            /> */}
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
              <select name="levels" id="">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-block">
              Add{" "}
            </button>
          </div>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default CreateAssignment;
