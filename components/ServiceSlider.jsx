import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { GoHubot } from "react-icons/go";
import { SiFrontendmentor, SiHiveBlockchain  } from "react-icons/si";
import { FaServer } from "react-icons/fa";


import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: SiFrontendmentor,
    title: "Global Trade",
    description: "Importance : Economic Growth & Consumer Benefits & Job Creation",
  },
  {
    Icon: FaServer,
    title: "Professional and Free Investment Training",
    description: "Online Courses & Certifications & Workshops and Seminars",
  },
  {
    Icon: SiHiveBlockchain,
    title: "friendship",
    description: "emotional support & fosters a sense of belonging & enhances overall well-being",
  },
  {
    Icon: GoHubot,
    title: "Business",
    description: "economic growth & creating jobs & fostering innovation",
  }
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,47,0.15)] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,65,0.15)] transition-all duration-300 h-[350px]">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
