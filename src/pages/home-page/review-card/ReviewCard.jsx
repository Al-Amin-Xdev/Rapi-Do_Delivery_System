import React, { use } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";

const ReviewCard = ({ reviewPromise }) => {
  const reviewData = use(reviewPromise);
  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold text-center text-primary my-3">Customer Review</h3>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusantium repellendus itaque quam. Distinctio quod assumenda dicta voluptates eos vero minus accusamus ullam sed eius!
        </p>
      </div>
      <Swiper
        loop={true}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {
          reviewData.map(card=> <SwiperSlide key={card.id}><Review card={card}></Review></SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default ReviewCard;
