"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardCollection } from "./CardCollection";
import { CardModel } from "@/utils/data";
import { Button } from "@/components/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Collection() {
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-primary font-bold text-6xl text-start lg:text-right">
          OUR COLLECTION
        </h1>
      </div>
      <div className="py-10 flex gap-x-8 flex-col-reverse lg:flex-row">
        <div className="w-full px-4 lg:px-0 lg:w-9/12">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 16, 
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2, 
                spaceBetween: 14,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
            }}
            loop={true}
            centeredSlides={false} // Disable centering to align items better
          >
            {CardModel.map(({ id, title, image }) => (
              <SwiperSlide key={id}>
                <CardCollection id={id} title={title} image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-stretch gap-9">
          {/* <div className="flex flex-col lg:flex-row self-center lg:self-end gap-8">
            <Button>Men</Button>
            <Button>Women</Button>
          </div> */}
          {/* <div className="hidden lg:flex self-start ml-12 gap-6 py-24">
            <ArrowLeft />
            <ArrowRight />
          </div> */}
          <p className="w-full self-start px-6 lg:px-0 xs:text-center font-medium lg:text-start text-xl xs:text-[#333333] xs:py-4 z-20">
            All the categories you need are in the SKOR which is ready to
            provide products according to your needs
          </p>
        </div>
      </div>
      {/* <div className="bg-primary w-full h-[292px] absolute -bottom-[107rem] right-0 z-0 hidden lg:inline-block"></div> */}
    </section>
  );
}
