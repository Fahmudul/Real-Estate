import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

const SignIn = () => {
  const { logIn } = useContext(AuthContext);
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
        navigate("/");
        // <Navigate to="/" />;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar></Navbar>

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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
