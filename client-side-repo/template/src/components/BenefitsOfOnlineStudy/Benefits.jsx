import { useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const Benefits = () => {
  const axiosUrl = useAxiosUrl()
  const [data , setData ]= useState([])
  useEffect(()=>{
    axiosUrl.get('/features')
    .then(res=> {
      setData(res.data)
    })
  },[])
  console.log(data);
  return (
    <div>
        {/* text div  */}
        <div className=" my-10">
        <h1 className=" text-3xl text-center font-black my-5">
          Here Are Some Benefits Of Online Studying
        </h1>
        <p className=" max-w-sm lg:max-w-lg text-center mx-auto">
        Online study offers flexibility, accessibility, and customization, enabling learners to access high-quality education from anywhere. It's cost-effective, self-paced, and provides diverse learning resources, making it an ideal choice for those seeking convenient and personalized learning experiences.
        </p>
        {/* card div  */}
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 w-[98%] mx-auto ">
      {
        data?.map(singleData=><div key={singleData._id} className="card card-normal bg-base-300 shadow-xl flex-col lg:flex-row-reverse p-2 lg:p-5 border border-yellow-300">
        <figure className=" w-full lg:w-[40%] h-full rounded-lg "><img className=" h-full w-full" src={singleData?.image} alt="banner image"/></figure>
        <div className="card-body w-full lg:w-[60%] ">
          <h2 className="card-title text-3xl font-bold hover:underline">{singleData?.title}</h2>
          <p>{singleData?.description}</p>
         
        </div>
      </div>)
      }
    </div>
      </div>

    </div>
  );
};

export default Benefits;