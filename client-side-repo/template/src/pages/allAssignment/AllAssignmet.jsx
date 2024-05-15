import { useContext, useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

import Swal from "sweetalert2";
import { AuthContext } from "../../authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { toDate } from "date-fns";

const AllAssignmet = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [assignments, setAssignments] = useState([]);
  const axiosUrl = useAxiosUrl();
  const theme = localStorage.getItem("theme");
  useEffect(() => {
    axiosUrl.get("/assignments").then((res) => {
      setAssignments(res.data);
      setLoading(false);
    });
  }, []);
  // console.log(assignments);

  const handleDelete = (email, id) => {
    // console.log(email, id);
    if (
      user?.email !== email
      // ||user.accessToken!==token
    ) {
      return toast.error("You Cannot Delete Any Other User's Assignment");
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You Want Delete This Assigment? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosUrl.delete(`/assignments/${id}`).then((res) => {
          // console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted Successfully",
              icon: "success",
            });
            const filterAfterDelete = assignments.filter(
              (assignment) => assignment._id !== id
            );
            // console.log(filterAfterDelete);
            //  newCraft( filterAfterDelete)
            setAssignments(filterAfterDelete);
          }
        });
      }
    });
  };
  const handleFilter = (e) => {
    if (e.target.value === "All") {
      return axiosUrl.get("/assignments").then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
    } else {
      axiosUrl.get(`/assignments?filter=${e.target.value}`).then((res) => {
        setAssignments(res.data);
        setLoading(false);
      });
    }
    // console.log(e.target.value.toLowerCase());
  };
  // const date = new toDate()
  return (
    <div>
      {/* banner  */}
      <div className=" my-10">
        {/* text div  */}
        <div className=" border border-yellow-200 p-3  bg-base-200">
          <div className=" flex flex-col lg:flex-row gap-5">
            <div className=" w-full lg:w-[50%] ">
              <img
                src="https://i.postimg.cc/4NY2ZbKV/human-assignment.png"
                className=" rounded-lg shadow-2xl h-full w-full "
              />
            </div>
            <div className=" w-full lg:w-[50%] ">
              <h1 className=" text-2xl  lg:text-4xl text-center font-black my-5">
                Assignment Roulette <span className=" text-yellow-500">Choose Your Challenge!</span>
              </h1>
              <p className=" max-w-sm md:max-w-lg text-center mx-auto  text-base lg:text-lg">
                In this assignment format, students are presented with a range
                of intriguing academic challenges, each offering a unique
                opportunity for exploration and growth. From virtual museum
                tours to digital storytelling projects, students have the
                freedom to select the assignment that sparks their curiosity and
                ignites their passion. By embracing this element of choice,
                students take on the role of adventurers, navigating their own
                path through the digital academic landscape.
              </p>
              <div className=" flex justify-center my-10">
                <button className="  btn btn-outline btn-error">
                  Take Challenge
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-20">
          <h1 className=" text-3xl text-center font-black my-5">
            Diverse a Interesting Adventures of Assignments
          </h1>
        </div>
        {/* card div  */}
        <div className="form-control border border-orange-200 rounded-lg bg-base-200 w-[60%] md:w-[40%] lg:w-[21%] flex flex-row ">
          <label className="label border-r-2 pr-7 border-yellow-200">
            <span className=" text-base lg:text-lg font-bold">
              {" "}
              Difficulty Level
            </span>
          </label>

          <select
            onChange={handleFilter}
            className=" pl-5 bg-base-200  py-2 rounded-md"
            name="levels"
            id=""
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="flex justify-center w-full ">
          {loading && (
            <span className="loading loading-spinner loading-lg text-center "></span>
          )}
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-[98%] mx-auto mt-20">
          {assignments?.map((singleData) => (
            <div
              key={singleData._id}
              className="card  bg-base-100 shadow-lg flex-col  p-2 lg:p-3 border border-purple-400"
            >
              <figure className="w-[80%] mx-auto h-52 rounded-lg ">
                <img
                  className=" h-full w-full"
                  src={singleData?.photoURL}
                  alt="banner image"
                />
              </figure>
              <div className="card-body w-full  ">
                <h2 className="card-title text-xl lg:text-2xl font-bold hover:underline">
                  {singleData?.title}
                </h2>
                <div>
                  {singleData?.description?.length > 100 ? (
                    <p>
                      {singleData?.description?.slice(0, 100)}...
                      <Link
                        to={`/assignments/${singleData._id}`}
                        className=" font-bold text-blue-600"
                      >
                        Read More.
                      </Link>{" "}
                    </p>
                  ) : (
                    <p>{singleData?.description}</p>
                  )}
                </div>
                <div className="divider"></div>
                <div className=" flex justify-between ">
                  <h2 className=" text-base lg:text-xl font-semibold  ">
                    Difficulty Level:{" "}
                    <span className=" text-cyan-500 font-bold">
                      {singleData.levels}
                    </span>
                  </h2>
                  <h2 className=" text-base lg:text-xl font-semibold  ">
                    Marks:{" "}
                    <span className=" text-orange-500 font-bold">
                      {singleData.marks}
                    </span>
                  </h2>
                </div>
                <div className="divider"></div>
                <h3 className=" text-base font-semibold my-5">
                  Submission Data:{" "}
                  <span className=" text-purple-800">
                    {singleData?.date?.slice(0, 10)}
                  </span>
                </h3>
                <div className=" flex justify-between my-5 ">
                  <Link to={`/update/${singleData._id}`}>
                    <button className="btn btn-success text-white ">
                      Update{" "}
                      <span className=" text-xl">
                        <FaEdit></FaEdit>
                      </span>
                    </button>
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(
                        singleData.email,
                        singleData._id,
                        singleData?.accessToken
                      )
                    }
                    className="btn btn-error text-white "
                  >
                    Delete{" "}
                    <span className=" text-3xl">
                      <TiDelete></TiDelete>
                    </span>
                  </button>
                </div>
                <Link to={`/assignments/${singleData?._id}`}>
                  <button className=" btn btn-block text-xl font-bold my-5 btn-accent btn-outline">
                    View Assignment
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AllAssignmet;
