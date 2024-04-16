import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { object } from "prop-types";
import Footer from "./Footer";
import { saveProperty } from "../../../SaveToLocalStorage/SaveToLocalStorage";

const DetailsPage = () => {
  const [estates, setEstate] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Fahmudul/estate-info/main/privateislands.json"
    )
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);
  const { detailId } = useParams();
  const singleState = estates.find((estate) => estate.id == detailId) || {};
  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    image,
  } = singleState;
  const { facilities } = singleState;
  // console.log(facilities);
  const handleBuyProperty = (propertyName) => {
    saveProperty(propertyName);
    // console.log(propertyName);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto  flex flex-col  lg:gap-12 gap-5">
        <div className="w-full lg:h-[550px]  py-7 bg-white rounded-2xl">
          <img
            src={image}
            className="w-full h-[100%] mx-auto rounded-2xl"
            alt=""
          />
        </div>
        <div className="w-full lg:w-[48%]">
          <h1 className="font-bold text-4xl">{estate_title}</h1>
          <p className="text-xl mt-5">By : {segment_name}</p>
          <div className="w-full h-1 border-2 border-[#dcdcdc] mb-4 mt-5"></div>
          <span className="text-xl">{description}</span>
          <div className="w-full h-1 border-2 border-[#dcdcdc] mb-6 mt-4"></div>

          <div className="w-full mb-8 flex flex-col gap-3">
            <div className="flex">
              <p className="w-[30%]">Location</p>
              <span className="font-semibold">{location}</span>
            </div>
            <div className="flex">
              <p className="w-[30%]">Area</p>
              <span className="font-semibold">{area}</span>
            </div>
            <div className="flex">
              <p className="w-[30%]">Property for</p>
              <span className="font-semibold border px-2 bg-gradient-to-br from-green-400 to-blue-500 text-white rounded-full">
                {status}
              </span>
            </div>
            <div className="flex ">
              <p className="font-bold  w-[30%]">Facility:</p>
              {facilities?.map((facility, idx) => (
                <p className="font-bold text-[#6b7290] mr-2" key={idx}>
                  {facility},
                </p>
              ))}
            </div>
            <div className="flex">
              <p className="w-[30%] ">Price</p>
              <span className="font-semibold text-green-600">{price}</span>
            </div>
            <button
              className="btn btn-success"
              onClick={() => handleBuyProperty(singleState)}
            >
              Buy Property
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailsPage;
