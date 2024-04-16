import React, { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Update Profile | HomeHeaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="w-full h-[600px] items-center flex justify-center border">
        <div className="shadow-xl   w-[600px] h-[500px] mx-auto rounded-lg flex flex-col md:flex-row lg:flex-row justify-center gap-7 items-center">
          <img src={user?.photoURL} className="h-[50%] lg:h-[70%] rounded-xl" alt="" />
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
      <Footer></Footer>

    </div>
  );
};

export default UpdateProfile;
