import Navbar from "../Shared/Navbar/Navbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import './slider.css'
// import img_1 from "../../assets/slider 1.png";
const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/*Banner section*/}
      <div className="w-[90%] mt-5 mx-auto ">
        <Swiper className=" h-[900px]"
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
            <div className=" rounded-2xl min-h-[800px] slider_image_1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, excepturi.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-2xl min-h-[800px] slider_image_1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, excepturi.
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded-2xl min-h-[800px] slider_image_1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, excepturi.
            </div>
          </SwiperSlide>
          
          
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
