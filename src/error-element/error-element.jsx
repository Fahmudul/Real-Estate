import React from "react";
import error from "../assets/error-element.png";
const ErrorElements = () => {
  return (
    <div className="bg-[#f2f2f5] h-[100vh]  flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center bg-[#f2f2f5]">
        <img src={error} className="w-full" alt="" />
        <button
          className="btn btn-primary mt-3 mb-5"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Go to home
        </button>
      </div>
    </div>
  );
};

export default ErrorElements;
