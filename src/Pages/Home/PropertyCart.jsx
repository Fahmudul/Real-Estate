import { FaSackDollar } from "react-icons/fa6";
const PropertyCart = ({ singleProperty }) => {
  const { estate_title, description, price, area, image } = singleProperty;
  console.log(singleProperty);

  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row shadow-xl rounded-xl p-5 border">
      <div className="flex-1">
        <img src={image} className="w-full h-[450px]  rounded-lg" alt="" />
      </div>
      <div className="w-[60%] flex flex-col text-2xl space-y-5 ml-5">
        <h1 className="font-bold">House Title</h1>
        <p className="text-gray-500">{estate_title}</p>
        <h1 className="font-bold">Area</h1>
        <p className="text-gray-500">{area}</p>
        <h1 className="font-bold">House price</h1>
        <p className="text-gray-500 flex items-center gap-3">
          <FaSackDollar className="w-5 h-5" />
          {price}
        </p>
        <h1 className="font-bold min-w-[300px]">House description</h1>
        <p className="text-gray-500 min-w-[270px] md:w-[600px] lg:w-[880px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyCart;
