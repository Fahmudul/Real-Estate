import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import "../Home/linearBackground.css";

import Footer from "../Shared/Navbar/Footer";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";

const SignIn = () => {
  const { logIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in Successfully");
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        const errorMessages = error.message;
        const errorCode = errorMessages.split("(")[1].split(")")[0];
        const errorCodeWithoutAuth = errorCode.replace(/^auth\//, "");
        const formattedErrorCode = errorCodeWithoutAuth.replace(/-/g, " ");
        // setError(formattedErrorCode);
        toast.error(formattedErrorCode);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | HomeHeaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-custom-background">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-blur ">
          <h1 className="text-black text-center text-xl font-bold mt-4">
            Welcome Back!
          </h1>
          <form className="card-body" onSubmit={handleSignIn}>
          <div className="form-control relative">
          <MdEmail className="w-5 h-5 absolute  top-[9px]" />
          <label className="label">
            <span className="label-text text-base font-bold ml-5">
              Email
            </span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <FaLock className="w-5 h-5 absolute  top-2 " />

          <label className="label ml-5">
            <span className="label-text text-base font-bold">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
            <div className="form-control mt-3">
              <button className="btn bg-blue-500 outline-none border-none text-white">Login</button>
            </div>

            <p className="mt-7 text-center">
              Dont Have an account{" "}
              <Link className="underline  text-blue-800" to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignIn;
