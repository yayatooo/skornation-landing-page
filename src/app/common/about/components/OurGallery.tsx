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
    <div className="pt-20">
      <div className="flex justify-between items-stretch">
        <div className="w-4/12 self-start ml-24">
          <h1 className="font-bold text-7xl text-primary">
            Explore <br /> Our Store
          </h1>
          <p className="font-medium text-2xl py-8">
            To become the go-to destination for sports products, synonymous with
            quality, innovation, and customer satisfaction.
          </p>
          <Button>Discover More</Button>
        </div>

        <div className="w-6/12 self-center">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={25}
            slidesPerView={1.3}
            centeredSlides={true}
          >
            {GallerySlide.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative h-[480px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    width={780}
                    height={569}
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
