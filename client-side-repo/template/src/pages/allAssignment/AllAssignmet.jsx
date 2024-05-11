import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { Link } from "react-router-dom";

const AllAssignmet = () => {
  const [assignments, setAssignments] = useState([]);
  const axiosUrl = useAxiosUrl();
  const theme = localStorage.getItem('theme')
  useEffect(() => {
    axiosUrl.get("/assignments").then((res) => {
      setAssignments(res.data);
    });
  }, []);
  console.log(theme);

  return (
    <div>
      {/* banner  */}
      <div className=" my-10">
        {/* text div  */}
        <div className=" border border-yellow-300  bg-base-200">
          <div className=" flex flex-col lg:flex-row gap-5">
            <div className=" w-full lg:w-[50%] ">
              <img
                src="https://i.postimg.cc/4NY2ZbKV/human-assignment.png"
                className=" rounded-lg shadow-2xl h-full w-full "
              />
            </div>
            <div className=" w-full lg:w-[50%] ">
              <h1 className=" text-2xl text-center font-black my-5">
              Assignment Roulette: Choose Your Challenge!
              </h1>
              <p className=" max-w-sm md:max-w-lg text-center mx-auto">
              In this assignment format, students are presented with a range of intriguing academic challenges, each offering a unique opportunity for exploration and growth. From virtual museum tours to digital storytelling projects, students have the freedom to select the assignment that sparks their curiosity and ignites their passion. By embracing this element of choice, students take on the role of adventurers, navigating their own path through the digital academic landscape. 
              </p>
              <div className=" flex justify-center my-10">
                <button className="  btn btn-outline btn-error">Take Challenge</button>

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
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-[98%] mx-auto mt-20">
      {
        assignments?.map(singleData=><div key={singleData._id} className="card  bg-base-100 shadow-xl flex-col  p-2 lg:p-3 border border-lime-300">
        <figure className="w-[50%] mx-auto h-52 rounded-lg "><img className=" h-full w-full" src={singleData?.photoURL} alt="banner image"/></figure>
        <div className="card-body w-full  ">
          <h2 className="card-title text-xl md:text-2xl font-bold hover:underline">{singleData?.title}</h2>
          <div>
            {singleData?.description.length>100?
            <p>{singleData?.description.slice(0,100)}...<Link className=" font-bold text-blue-600">Read More.</Link> </p>
            :
            <p>{singleData?.description}</p>
          }
          </div>
          
         
        </div>
      </div>)
      }
    </div>
      </div>
    </div>
  );
};

export default AllAssignmet;
