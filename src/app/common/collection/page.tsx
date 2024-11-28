"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardCollection } from "./components/CardCollection";
import { CardModel } from "@/utils/data";
import { Button } from "@/components/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Collection() {
  return (
    <section className="bg-secondary">
      <div className="container mx-auto">
        <h1 className="text-primary font-bold text-6xl text-right">
          OUR COLLECTION
        </h1>
      </div>
      <div className="py-10 flex gap-x-8">
        <div className="w-8/12">
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            spaceBetween={15}
            slidesPerView={2.8}
            centeredSlides={true}
          >
            {CardModel.map(({ id, title, image }) => (
              <SwiperSlide key={id}>
                <CardCollection id={id} title={title} image={image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-stretch gap-9">
          <div className="flex self-center gap-8">
            <Button>Men</Button>
            <Button>Women</Button>
          </div>
          <div className="flex self-start ml-12 gap-6 py-24">
            <ArrowLeft />
            <ArrowRight />
          </div>
          <p className="w-6/12 self-start ml-12 text-xl text-white z-20">
            All the categories you need are in the SKOR which is ready to
            provide products according to your needs
          </p>
        </div>
      </div>
      <div className="bg-primary w-full h-[292px] absolute -bottom-[148rem] right-0 z-0"></div>
    </section>
  );
}
