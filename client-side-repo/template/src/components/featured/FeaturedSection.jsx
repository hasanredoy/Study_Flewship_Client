import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";

import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const FeaturedSection = () => {
  const axiosUrl = useAxiosUrl();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosUrl.get("/features").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);
  // console.log(data);
  return (
    <div className=" my-10">
      {/* text div  */}

      <div className=" my-10">
        <h1 className=" text-3xl text-center font-black my-10">
          Discover Our Highlights
        </h1>
        <p className=" max-w-sm md:max-w-lg text-center mx-auto">
          Explore the best of Study Flewship with our Featured Insights section,
          where you'll find curated highlights, top-rated study sessions, and
          invaluable resources to enhance your learning experience. Dive into a
          world of knowledge, collaboration, and inspiration as you embark on
          your educational journey with us
        </p>
      </div>
      <div className="flex justify-center w-full ">
        {loading && (
          <span className="loading loading-spinner loading-lg text-center "></span>
        )}
      </div>
      {/* card div  */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-[98%] mx-auto ">
        {data?.map((singleData,index) => (
          <div
        
            key={singleData._id}
            className="card  card-side bg-base-300 shadow-xl flex-col lg:flex-row-reverse p-2  border border-yellow-300"
          >
            <figure className=" w-full lg:w-[40%] h-56 lg:h-full rounded-lg ">
              <img
                className=" h-full w-full"
                src={singleData?.image}
                alt="banner image"
              />
            </figure>
            <div className=" p-5 pl-2 w-full lg:w-[60%] ">
              <h2 className="card-title  text-xl md:text-2xl font-bold hover:underline">
                {singleData?.title}
              </h2>
              <p className="">{singleData?.description}</p>
              <Link to={"/assignments"}>
                <button className=" btn-square">
                  <FaArrowCircleRight className=" text-3xl font-bold text-purple-400"></FaArrowCircleRight>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSection;
