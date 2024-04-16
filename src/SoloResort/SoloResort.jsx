import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
const SoloResort = ({ estates }) => {
  // console.log(soloInfo)
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
    id,
  } = estates;
  return (
    <div className="p-3 shadow-xl border-[1px]  rounded-xl no-underline text-black">
      <div className="">
        <div className="p-3  rounded-xl h-[630px] md:h-[600px] lg:h-[600px]">
          <img
            className="w-full rounded-xl h-[270px] mb-3"
            src={image}
            alt=""
          />
          <h2 className="font-monospace text-2xl ">{estate_title}</h2>
          <h3 className="text-lg font-bold my-2">{segment_name}</h3>
          <p className="text-gray-500">{description}</p>
          <p className="text-lg my-2">
            Area: <span className="font-bold ">{area}</span>{" "}
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot />
            {location}
          </p>
          <div className="my-2">
            <span className="font-bold">Facilities</span>
            {facilities.map((facility, idx) => (
              <p className="ml-2 text-gray-400 font-bold"> {facility}</p>
            ))}
          </div>
        </div>
        <div className="p-3  relative mt-3">
          <Link to={`details/${id}`} className="btn mr-2">
            View Property
          </Link>
          <div className="bg-gradient-to-br from-green-400 to-blue-500  inline  py-2 text-white rounded-full absolute right-2 bottom-3 w-14 text-center px-3">
            {status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoloResort;
