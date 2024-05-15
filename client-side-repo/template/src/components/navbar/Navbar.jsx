import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { IoMdSunny } from "react-icons/io";
import { HiMoon } from "react-icons/hi";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";



const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const { user, logOut } = useContext(AuthContext);

  if (toggle) {
    document.querySelector("html").setAttribute("data-theme", "light");
  }
  if (!toggle) {
    document.querySelector("html").setAttribute("data-theme", "dark");
  }

  const handleLogOut = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You Want Log Out ? ",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
        .then(res =>{

        } )
        .catch(err =>{

        })
        Swal.fire({
          title: "Logged Out Successfully",
          icon: "success"
        });
      }
    });
   }
  const links = (
    <>
      {user ? (
        <>
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/"}
            >
              Home
            </NavLink>
          </>
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/assignments"}
            >
              Assignments
            </NavLink>
          </>
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/createAssignments"}
            >
              Create Assignments
            </NavLink>
          </>
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/pendingAssignments"}
            >
              Pending Assignments
            </NavLink>
          </>
        </>
      ) : (
        <>
          {" "}
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/"}
            >
              Home
            </NavLink>
          </>
          <>
            <NavLink
              className={"flex justify-center hover:bg-slate-200 "}
              to={"/assignments"}
            >
              Assignments
            </NavLink>
          </>
        </>
      )}
    </>
  );
  // console.log(toggle);
  return (
    <div>
      <div className="navbar bg-base-300 p-0 m-0 shadow-sm shadow-stone-400">
        <div className=" navbar-none md:navbar-start flex flex-col justify-start md:flex-row">
          <div className="dropdown mr-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm gap-y-3 font-bold text-lg bg-neutral-100 dropdown-content mt-2 z-[1] p-4 shadow  rounded-lg w-60  text-black"
            >
              {links}
            </ul>
          </div>
          {/* dropdown for theme  */}
          <div className=" mr-2 lg:mr-0 mt-0 lg:mt-2">
            <label
              onChange={() => setToggle(!toggle)}
             
              className="swap swap-rotate "
            >
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <Link
            to={"/"}
            className="btn btn-ghost text-2xl font-black bg-gradient-to-l bg-clip-text text-transparent from-teal-600 via-zinc-600 to-yellow-400"
          >
            Study Flew Ship
            
          </Link>
        </div>
        <div className="navbar-end flex flex-col gap-2 justify-end md:flex-row ">
          {user ? (
            <div tabIndex={0} role="button" className=" dropdown-bottom dropdown relative pt-1  "  >
              <div className="avatar online mr-0 md:mr-3">
                <div  className="w-16 rounded-full"  >
                  <img src={user?.photoURL || 'https://i.postimg.cc/9FYCz4PJ/Screenshot-2024-05-10-221419.png'} />
                </div>
              </div>
             

  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-64 absolute -left-48 space-y-3">
    <li className=" "><h1 className="font-bold text-lg flex flex-row gap-2">Hi,<span className=" text-purple-600">{user?.displayName}</span></h1></li>
    <hr />
    <li><Link className="font-bold" to={'/myAssignments'}>My Attempted Assignments</Link></li>
    <li><button onClick={handleLogOut} className=" btn btn-warning">LogOut<IoIosLogOut></IoIosLogOut> </button></li>
  </ul>

            </div>
          ) : (
            <>
              {" "}
              <Link to={"/login"}>
                {" "}
                <button className="btn btn-outline w-24 font-bold text-base lg:text-lg btn-success">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                {" "}
                <button className="btn  font-bold text-base lg:text-lg  btn-accent mx-0 lg:mx-5 mb-1 lg:mb-0 ">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
