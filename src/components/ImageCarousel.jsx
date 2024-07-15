import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ImageCarousel() {
  return (
    <div className="flex justify-center items-center ">
      <Swiper
        className="w-[81rem] rounded-md "
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/t_landscape/v1721061802/Kratos%20Logistics/fleet-kratos_atbwyu.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/t_landscape/v1721057173/Kratos%20Logistics/load-out-kratos_appjqw.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/t_landscape/v1721057173/Kratos%20Logistics/parcel-kratos_rckpvk.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/t_landscape/v1721062723/Kratos%20Logistics/loaded-kratos_puxvsf.jpg"
              alt=""
              className="w-full h-full object-contain"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
