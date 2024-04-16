import Navbar from "../Shared/Navbar/Navbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Resort from "../../Resort/Resort";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
// import img_1 from "../../assets/slider 1.png";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {/*Banner section*/}
      <div className="w-[90%] mt-5 mx-auto ">
        <Swiper
          className=" h-[900px]"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className=" rounded-2xl min-h-[800px] slider_image_1 lg:text-left text-center">
              <div className=" text-white w-[80%] py-[20%] px-[5%]">
                <h1 className="text-3xl md:text-5xl lg:text-5xl">
                  Your Private Island Getaway
                </h1>
                <p className="lg:w-[60%] text-lg mt-3 mb-4">
                  Experience ultimate relaxation and seclusion as you unwind in
                  luxurious villas with breathtaking ocean views. Enjoy
                  personalized service, gourmet dining, and a range of
                  activities including snorkeling, scuba diving, and sunset
                  cruises
                </p>
                <button className="btn">Show Details</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-2xl min-h-[800px] slider_image2">
              <div className=" text-white w-[80%] py-[20%] px-[5%]">
                <h1 className="text-3xl md:text-5xl lg:text-5xl">
                  Escape to Paradise: Discover Our Exquisite Resort Experience
                </h1>
                <p className="lg:w-[60%] text-lg mt-3 mb-4">
                  Immerse yourself in the ultimate getaway experience at
                  Paradise Resort, where every moment is designed to captivate
                  your senses and rejuvenate your spirit. Nestled amidst the
                  lush, tropical landscapes of [location], our resort offers a
                  harmonious blend of luxury, relaxation, and excitement.
                </p>
                <button className="btn">Show Details</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-2xl min-h-[800px] slider_image_3">
              <div className=" text-white w-[80%] py-[20%] px-[5%]">
                <h1 className="text-3xl md:text-5xl lg:text-5xl">
                  Ascend to Luxury: Discover Our Exquisite Penthouse Collection
                </h1>
                <p className="lg:w-[60%] text-lg mt-3 mb-4">
                  Welcome to unparalleled luxury living at our exquisite
                  penthouse. Perched high above the city skyline, this
                  magnificent residence offers an unparalleled blend of
                  opulence, comfort, and breathtaking views. Designed for those
                  with discerning tastes, our penthouse redefines urban
                  sophistication.
                </p>
                <button className="btn">Show Details</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Estate section*/}
      <h1 className="text-center md:text-3xl text-2xl lg:text-5xl font-bold text-gray-600 mt-5 mb-4">
        Estate
      </h1>
      <Resort></Resort>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array,
};

export default Home;
