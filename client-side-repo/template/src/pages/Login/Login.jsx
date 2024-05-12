import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import {toast , ToastContainer} from 'react-toastify'
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Login = () => {
const location = useLocation()
const navigate = useNavigate()

  const {user, signIn,
    signInWithGoogle,}=useContext(AuthContext)
    const [eye, setEey] = useState(true);

console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    if (password.length < 6) {
      toast.error("Password Should Be 6 Character or More");
      return;
    }
    if (!/[A-Z][a-z]/.test(password)) {
      toast.error(
        "Password Must Have Contain One Uppercase And One Lowercase Latter"
      );
      return;
    }

    console.log(user);
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        // navigate(location)
        // console.log(location);
        toast.success("Logged In Successfully");
       
        navigate(location?.state?location.state:setTimeout(()=>{
          navigate('/')
        },1000))
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please Check Email And Password And Try Again");
      });
  };


  const handleGoogleLogin = ()=>{
    signInWithGoogle()
    .then(res => {
      console.log(res);
      toast.success('Logged In With Google Successfully')
      navigate(location?.state?location.state:setTimeout(()=>{
      navigate('/')
    },1000))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
       <Helmet>
                
                <title>Study Flewship | Login</title>
                
            </Helmet>
       <div className=" sticky top-0 z-50">
  <Navbar></Navbar>
  </div>
      <div 
      className="  bg-base-200
  w-full flex justify-center items-center py-5 "
    >
      
       
      <div
       style={{backgroundImage: 'url(https://img.freepik.com/premium-psd/gradient-abstract-borders_23-2150602075.jpg?size=626&ext=jpg&ga=GA1.1.1157238559.1714161987&semt=ais_user'}} 
      className=" bg-cover relative card shrink-0 shadow-2xl  w-full h-full  lg:w-1/2  text-white">
        <div className=" absolute w-full z-20 h-full rounded-xl bg-black bg-opacity-60">
          
        </div>
        <h2 className=" z-40 font-bold text-3xl text-center pt-4"> Please Login!</h2>
        <form onSubmit={handleLogin} className="card-body z-40">
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-white text-black"
              required
              name="email"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="text-xl font-semibold">Password</span>
            </label>
            <input
              type={eye ? "password" : "text"}
              placeholder="Password"
              className="input input-bordered bg-white text-black"
              required
              name="password"
            />
            {eye ? (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4 text-black"
              >
                <FaEye></FaEye>
              </span>
            ) : (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4 text-black"
              >
                <FaEyeSlash></FaEyeSlash>
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-success font-bold text-xl">
              Login
            </button>
          </div>
        </form>
        <div className="divider">or</div>
        <div className=" flex justify-evenly my-5 z-40 ">
          <button onClick={handleGoogleLogin} className="btn  text-black btn-info">
            Login With <FcGoogle className=" text-2xl"></FcGoogle>{" "}
          </button>
          
        </div>
        <p className=" z-40 text-center pb-3 font-semibold">
          New Here !{" "}
          <Link to={"/register"} className=" hover:underline bg-white p-[2px] rounded-md text-blue-800 font-bold">
            Register.
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
    <div>
    <Footer></Footer>
  </div>
    </div>
  );
};

export default Login;