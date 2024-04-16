import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";

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
        alert("Logged in Successfully");
        setTimeout(function () {
          window.location.href = "/";
        }, 2000);
        // <Navigate to="/" />;
      })
      .catch((error) => {
        setError(error);
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
      <div className="hero min-h-screen bg-base-200">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-black text-center">Please Login</h1>
          <form className="card-body" onSubmit={handleSignIn}>
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-blue-500 ">Login</button>
            </div>
            <p className="mt-7 text-center">
              Dont Have an account{" "}
              <Link className="underline  text-blue-800" to="/signup">
                Sign Up
              </Link>
            </p>
            <p>{error ? error.message : ""}</p>
          </form>
        </div>
      </div>
      <Footer></Footer>

    </div>
  );
};

export default SignIn;
