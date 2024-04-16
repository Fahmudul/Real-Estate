import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";

import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
console.log(user)
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-full md:h-[60vh] lg:h-[70vh] items-center flex justify-center  ">
        <div className="shadow-xl  w-[600px] h-[300px] mx-auto rounded-lg flex flex-col md:flex-row lg:flex-row justify-center gap-7 items-center">
          <div></div>
          <img src={user?.photoURL} className="h-[70%] rounded-2xl" alt="" />
          <div>
            <h1>{user?.displayName}</h1>
            <h1 className="text-lg">{user?.email}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
