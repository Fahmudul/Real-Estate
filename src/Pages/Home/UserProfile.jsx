import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>User Profile | HomeHeaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full md:h-[60vh] lg:h-[70vh] items-center flex justify-center ">
        <div className="shadow-xl  w-[600px] h-[300px] mx-auto rounded-lg flex flex-col md:flex-row lg:flex-row justify-center gap-7 items-center">
          <div></div>
          <img src={user?.photoURL} className="h-[50%] lg:h-[70%] rounded-xl" alt="" />
          <div className="pb-4">
            <h1 className="text-xl mb-3 text-center md:text-left lg:text-left">{user?.displayName}</h1>
            <h1 className="text-lg text-center md:text-left lg:text-left">Email: {user?.email}</h1>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default UserProfile;
