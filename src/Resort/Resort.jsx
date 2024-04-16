import { useEffect, useState } from "react";
import SoloResort from "../SoloResort/SoloResort";

const Resort = () => {
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Fahmudul/estate-info/main/privateislands.json"
    )
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);
  console.log(estate);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-[90%] mx-auto gap-4">
      {estate.map((estates, idx) => (
        <SoloResort key={idx} estates={estates}></SoloResort>
      ))}
    </div>
  );
};

export default Resort;
