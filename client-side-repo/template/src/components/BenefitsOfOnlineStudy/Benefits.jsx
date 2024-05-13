import { useEffect, useState } from "react";
import useAxiosUrl from "../../hooks/useAxiosUrl";


const Benefits = () => {
  const axiosUrl = useAxiosUrl()
  const [loading , setLoading]=useState(true)
  const [data , setData ]= useState([])
  useEffect(()=>{
    axiosUrl.get('/benefits')
    .then(res=> {
      setData(res.data)
      setLoading(false)
    })
  },[])
  // data[6].image='https://tse4.mm.bing.net/th?id=OIP.skL2AGbKpUabINQBrqwpiAHaEN&pid=Api&P=0&h=220'
  // console.log(data);
  return (
    <div>
        {/* text div  */}
        <div className=" my-10">
        <h1 className=" text-3xl text-center font-black my-5">
          Here Are Some Benefits Of Online Studying
        </h1>
        <p className=" max-w-sm md:max-w-lg text-center mx-auto">
        Online study offers flexibility, accessibility, and customization, enabling learners to access high-quality education from anywhere. It's cost-effective, self-paced, and provides diverse learning resources, making it an ideal choice for those seeking convenient and personalized learning experiences.
        </p>
        
        <div className="flex justify-center w-full ">
 {loading&&<span className="loading loading-spinner loading-lg text-center "></span>

}
</div>

        {/* card div  */}
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 w-[98%] mx-auto my-10">
      {
        data?.map((singleData,index)=><div key={singleData._id} 
          
        className="card  bg-base-100 shadow-xl flex-col  p-2 lg:p-5 border border-lime-300">
        <figure className="w-[50%] mx-auto h-52 rounded-lg "><img className=" h-full w-full" src={singleData?.image} alt="banner image"/></figure>
        <div className="card-body w-full  ">
          <h2 className="card-title text-xl md:text-2xl font-bold hover:underline">{singleData?.point}</h2>
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