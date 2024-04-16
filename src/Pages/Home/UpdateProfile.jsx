import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const updateProfile = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const photo = data.get("photo");
    // console.log(name, photo);
    updateUserProfile(name, photo);
    console.log(user);
    // navigate("/")
  };
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="w-full md:h-[60vh] lg:h-[70vh] items-center flex justify-center ">
        <div className="shadow-xl  w-[600px] h-[300px] mx-auto rounded-lg flex flex-col md:flex-row lg:flex-row justify-center gap-7 items-center">
          <div></div>
          <img src={user?.photoURL} className="h-[70%] rounded-xl" alt="" />
          <div>
            <form onSubmit={updateProfile}>
              <input
                className="block input input-bordered mb-3"
                type="text"
                name="name"
                placeholder="name"
                id=""
              />
              <input
                className="block input input-bordered"
                type="text"
                name="photo"
                placeholder="photo"
                id=""
              />
              <button className="btn mt-4 bg-blue-500 ">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
