import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return (
      <div className="relative h-screen flex justify-center items-center">
        <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  if (!user) {
    return (window.location.href = "/");
  }
};

export default PrivateRoute;
