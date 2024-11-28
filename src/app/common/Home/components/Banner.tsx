"use client";
import { Button } from "@/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { BannerSlide } from "@/utils/data";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Banner = () => {
  return (
    <section className="w-full h-[700px] bg-secondary flex flex-col justify-center">
      <div className="relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30} // Adds spacing between slides
          slidesPerView={1.3} // Shows partial slides on the sides
          centeredSlides={true} // Centers the active slide
          className="relative"
        >
          {BannerSlide.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[600px] w-full overflow-hidden py-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400/50 hover:bg-gray-200/80 py-4 pl-16 pr-4 transition-colors opacity-0 group-hover:opacity-100">
          <ArrowLeft strokeWidth={2.5} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-400/50 hover:bg-gray-200/80 py-4 pl-4 pr-16 transition-colors opacity-0 group-hover:opacity-100">
          <ArrowRight strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};
