import {Link, NavLink} from 'react-router-dom'
import './navbar.css'
import { IoMdSunny } from "react-icons/io";
import { HiMoon } from "react-icons/hi";



const Navbar = () => {

  const links = <>
  <><NavLink className={'flex justify-center hover:bg-slate-200 '} to={'/'}>Home</NavLink></>
  <><NavLink className={'flex justify-center hover:bg-slate-200 '} to={'/assignments'}>Assignments</NavLink></>
  <><NavLink className={'flex justify-center hover:bg-slate-200 '} to={'/createAssignments'}>Create Assignments</NavLink></>
  <><NavLink className={'flex justify-center hover:bg-slate-200 '} to={'/pendingAssignments'}>Pending Assignments</NavLink></>
  </>
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm gap-y-3 font-bold text-lg bg-neutral-100 dropdown-content mt-2 z-[1] p-4 shadow  rounded-lg w-60"
            >
             {links}
            </ul>
          </div>
          <div>
            <IoMdSunny></IoMdSunny>
            <HiMoon></HiMoon>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-2xl font-black bg-gradient-to-l bg-clip-text text-transparent from-teal-400 via-zinc-400 to-lime-600">Study Flew Ship</a>
        </div>
        <div className="navbar-end">
         <Link> <button className="btn btn-outline font-bold text-lg btn-success">
          Login
          </button></Link>
         <Link> <button className="btn  font-bold text-lg  btn-accent mx-5 ">
          Register
          </button></Link>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
