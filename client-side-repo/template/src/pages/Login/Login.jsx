import { useContext, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import {toast , ToastContainer} from 'react-toastify'
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";


const Login = () => {
  const {user, signIn,
    signInWithGoogle,}=useContext(AuthContext)
    const [eye, setEey] = useState(true);


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

        console.log(location);
        toast.success("Registered Successfully");
       
        // navigate(location?.state?location.state:setTimeout(()=>{
        //   navigate('/')
        // },1000))
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
    //   navigate(location?.state?location.state:setTimeout(()=>{
    //   navigate('/')
    // },1000))
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
      className=" bg-base-200
  w-full flex justify-center items-center py-5 "
    >
      
       
      <div className="card shrink-0 shadow-2xl  w-full h-full  lg:w-1/2 bg-gradient-to-tr from-lime-100 via-slate-50 to-indigo-100">
        <h2 className=" font-bold text-3xl text-center pt-4"> Please Login!</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-white"
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
              className="input input-bordered  bg-white"
              required
              name="password"
            />
            {eye ? (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4"
              >
                <FaEye></FaEye>
              </span>
            ) : (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4"
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
        <div className=" flex justify-evenly my-5 ">
          <button onClick={handleGoogleLogin} className="btn btn-outline text-black btn-accent">
            Login With <FcGoogle className=" text-2xl"></FcGoogle>{" "}
          </button>
          
        </div>
        <p className=" text-center pb-3 font-semibold">
          New Here !{" "}
          <Link to={"/register"} className=" text-blue-700 font-bold">
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