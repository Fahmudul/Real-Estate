import { FaFacebook, FaPinterest, FaSquareXTwitter } from "react-icons/fa6";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-2 min-h-[400px] bg-[#211e21] text-white mt-5">
      <div className="flex  md:flex-row lg:flex-row justify-center items-center border min-h-[400px] gap-5 lg:gap-52">
        <div className="flex gap-4 lg:flex-row md:flex-row flex-col">
          <FaFacebook className="w-8 h-8 cursor-pointer" />
          <FaPinterest className="w-8 h-8 cursor-pointer" />
          <FaSquareXTwitter className="w-8 h-8 cursor-pointer" />
          <SiDiscord className="w-8 h-8 cursor-pointer" />
        </div>
        <div className=" w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          <div className="border-l-2 border-[#333033] px-7 py-3">
            <h1 className="text-xl font-bold mb-2">Company</h1>
            <p className="text-[#878588]">About us</p>
            <p className="text-[#878588]">Services</p>
            <p className="text-[#878588]">Presentation</p>
            <p className="text-[#878588]">Clients</p>
          </div>
          <div className="border-l-2 border-[#333033] px-7 py-3">
            <h1 className="text-xl font-bold mb-2">Properties</h1>
            <p className="text-[#878588]">Commercial</p>
            <p className="text-[#878588]">Residential</p>
            <p className="text-[#878588]">Luxury</p>
          </div>
          <div className="border-l-2 border-[#333033] px-7 py-3">
            <h1 className="text-xl font-bold mb-2">For Clients</h1>
            <Link to="/signup" className="block text-[#878588]">
              Sign Up
            </Link>
            <Link to="/signin" className="block text-[#878588]">
              Sign In
            </Link>
            <p className="text-[#878588]">Promotions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
