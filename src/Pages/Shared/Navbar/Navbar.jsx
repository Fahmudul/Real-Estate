import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const Navbar = () => {
  // console.log(photoUrl);
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.photoURL);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Update Profile", link: "/updateprofile" },
    { name: "User Profile", link: "/userprofile" },
    // { name: "User Profile", link: "/userprofile" },
  ];
  let [open, setOpen] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
    // console.log(user);
  };

  return (
    <div>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          {/* logo section */}
          <div className="font-bold cursor-pointer flex items-center gap-1">
            <h1>
              Home<span>Heaven</span>
            </h1>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7 "
          >
            {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link, idx) => (
              <li
                className="md:ml-8 md:my-0 my-7 font-semibold list-none"
                key={idx}
              >
                <NavLink
                  to={link.link}
                  className="text-gray-800 no-underline hover:text-blue-400 duration-500 "
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            {user ? (
              <div className="flex ml-3">
                <img
                  className="w-12 rounded-full h-12"
                  src={user.photoURL}
                  alt=""
                />
                <button
                  onClick={handleSignOut}
                  className="btn bg-blue-600 text-lg  md:ml-5  font-semibold px-3 py-2  duration-500 md:static rounded-3xl"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-outline text-lg md:ml-8 mr-3 font-semibold px-3 py-2  md:static rounded-3xl">
                  <Link to="/signin" className="no-underline text-black">
                    Sign In
                  </Link>
                </button>
                <button className="btn bg-blue-600 text-lg  md:ml-5  font-semibold px-3 py-2  duration-500 md:static rounded-3xl">
                  <Link to="/signup" className="no-underline text-black">
                    Sign Up
                  </Link>
                </button>
              </div>
            )}
          </ul>
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
