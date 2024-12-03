"use client";

import { Button } from "@/components/Button";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GallerySlide } from "@/utils/data";

export const OurGallery = () => {
  return (
    <div className="xs:pt-0 lg:pt-20">
      <div className="flex lg:flex-row xs:flex-col justify-between items-stretch">
        <div className="lg:w-4/12 xs:w-10/12 self-start xs:mx-auto lg:ml-24">
          <h1 className="font-bold text-4xl text-center lg:text-start lg:text-7xl  text-primary ">
            Explore <br className="xs:hidden lg:inline" /> Our Store
          </h1>
          <p className="font-medium text-xl lg:text-2xl py-8">
            To become the go-to destination for sports products, synonymous with
            quality, innovation, and customer satisfaction.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button>Discover More</Button>
          </div>
        </div>

        <div className="lg:w-6/12 xs:w-full self-center xs:py-12 lg:pt-0">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 1.3,
                spaceBetween: 26,
              },
            }}
            loop={true}
            // spaceBetween={25}
            // slidesPerView={1.3}
            centeredSlides={true}
          >
            {GallerySlide.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative xs:h-[240px] lg:h-[480px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
