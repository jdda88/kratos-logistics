import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function ImageCarousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Autoplay, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720908922/Kratos%20Logistics/Screenshot_2024-07-13_at_6.15.01_PM_jcxtnf.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720908922/Kratos%20Logistics/Screenshot_2024-07-13_at_6.15.01_PM_jcxtnf.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720908922/Kratos%20Logistics/Screenshot_2024-07-13_at_6.15.01_PM_jcxtnf.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://res.cloudinary.com/dprkq4xne/image/upload/v1720908922/Kratos%20Logistics/Screenshot_2024-07-13_at_6.15.01_PM_jcxtnf.png"
              alt=""
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}

export default ImageCarousel;
