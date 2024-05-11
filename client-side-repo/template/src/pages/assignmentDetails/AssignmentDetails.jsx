import { Link, useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const singleData = useLoaderData();
  return (
    <div>
      <h1 className=" font-bold text-3xl text-center my-10">
        Details of <span className=" text-orange-700">{singleData.title}</span>
      </h1>
      <div className="card  card-side bg-base-100  flex-col lg:flex-row p-2 gap-[2%]  border border-gray-400">
        <figure className=" w-full lg:w-[48%] h-56 lg:h-full rounded-lg ">
          <img
            className=" h-full w-full"
            src={singleData?.photoURL}
            alt="banner image"
          />
        </figure>
        <div className="  pl-2 w-full lg:w-[48%] ">
          <h2 className="card-title mb-5 text-xl md:text-2xl font-bold hover:underline">
            {singleData?.title}
          </h2>
          <p className="">{singleData?.description}</p>
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
          <div>
            <Link>
              <button className=" btn btn-block text-xl font-bold my-5 btn-accent btn-outline">
                Take Assignment
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
