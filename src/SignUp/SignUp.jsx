import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
const SignUp = () => {
  const { signUp, GoogleSignIn, GitHubSignIn, setUser } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const [photoUrl, setPhotoUrl] = useState("");
  // const navigate = useNavigate();
  //   console.log(signUp);
  const handleSignUp = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    const photo = data.get("photo");
    const name = data.get("name");
    setError("");
    setPhotoUrl(photo);
    if (password.length < 6) {
      setError("Password need to be at-least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must need to contain an Uppercase letter ");
    }
    if (!/^(?=.*[a-z]).+$/.test(password)) {
      setError("Password must need to contain an LowerCase letter ");
    }
    signUp(email, password)
      .then((result) => {
        updateProfile(result.user, {
          photoURL: photo,
          displayName: name,
        });
        alert("Successfully created your account");
        setTimeout(function () {
          // console.log("redirect");
          location.reload();
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        const errorMessages = error.message;
        const errorCode = errorMessages.split("(")[1].split(")")[0];
        const errorCodeWithoutAuth = errorCode.replace(/^auth\//, "");
        const formattedErrorCode = errorCodeWithoutAuth.replace(/-/g, " ");
        setError(formattedErrorCode);
      });
  };
  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGitHubSignIn = () => {
    GitHubSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // GitHubSignIn();

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
                placeholder="name"
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
            </div>

            <p className="mt-7 text-center">
              Already Have an account{" "}
              <Link className="underline  text-blue-800" to="/signin">
                Sign In
              </Link>
            </p>
            <p className="text-red-600 text-center">{error}</p>

            <div className="flex gap-2 mx-auto mb-5">
              <div>
                <button className="btn" onClick={() => handleGoogleSignIn()}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-5"
                  >
                    <g>
                      <path
                        fill="#EA4335"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                      ></path>
                      <path
                        fill="#4285F4"
                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                      ></path>
                      <path
                        fill="#FBBC05"
                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                      ></path>
                      <path
                        fill="#34A853"
                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                      ></path>
                      <path fill="none" d="M0 0h48v48H0z"></path>
                    </g>
                  </svg>{" "}
                  Google Login
                </button>
              </div>
              <div>
                <button className="btn" onClick={() => handleGitHubSignIn()}>
                  <FaGithub className="w-5 h-5" />
                  Github Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
