import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../../assets/brands/amazon.png";
import casio from "../../../../assets/brands/casio.png";
import moonstar from "../../../../assets/brands/moonstar.png";
import randstad from "../../../../assets/brands/randstad.png";
import amastarzon from "../../../../assets/brands/star.png";
import start_people from "../../../../assets/brands/start_people.png";
import { Autoplay, Navigation} from "swiper/modules";

const Brands = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
         modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <img src={amazon} alt="amazon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={casio} alt="casio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={moonstar} alt="moonstar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={randstad} alt="randstad" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={amastarzon} alt="amastarzon" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={start_people} alt="start-people" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
