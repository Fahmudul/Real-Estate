import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import "./Navbar.css";
const Navbar = () => {
  // console.log(photoUrl);
  const { user, logOut } = useContext(AuthContext);
  const navNavLinks = (
    <>
      <li>
        <NavLink className="mr-4  px-5 py-3 text-lg rounded-lg" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mr-4  px-5 py-3 text-lg rounded-lg" to="/updateProfile">
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink className="mr-4  px-5 py-3 text-lg rounded-lg" to="/userProfile">
          User Profile
        </NavLink>
      </li>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        // console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(user);
  };

  return (
    <div className="navbar bg-base-100 w-[90%] mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden pl-0 pr-0"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20 "
          >
            {navNavLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl lg:text-3xl gap-0 pl-3 lg:pl-0">
          Home<span>Heaven</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex z-20">
        <ul className="menu-horizontal px-1">{navNavLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 lg:space-x-5 items-center">
            <img className="h-10 w-10 rounded-full" src={user.photoURL} />
            <button onClick={handleSignOut} className="btn btn-primary">
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <button className="btn ">
              <Link className="no-underline text-black" to="/signin">
                Login
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
