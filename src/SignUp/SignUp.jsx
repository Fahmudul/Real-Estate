import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const [photoUrl, setPhotoUrl] = useState("");
  const navigate = useNavigate();
  //   console.log(signUp);
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const photo = data.get("photo");
    setPhotoUrl(photo);
    // console.log(email, password);
    signUp(email, password)
      .then((result) => {
        // const currentUser = result.user;
        updateProfile(result.user, {
          photoURL: photo,
        });
        navigate("/");
        // currentUser.photoURL = photo;
        // console.log(currentUser.photoURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar photoUrl={photoUrl}></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignUp}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 ">Sign Up</button>
              <p className="mt-7">
                Already Have an account{" "}
                <Link className="underline  text-blue-800" to="/signin">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
