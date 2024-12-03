"use client";
import { CardProduct } from "@/components/CardProduct";
import { ProductsDummy } from "@/utils/data";
import { HeadTitle } from "@/components/HeadTitle";
import React from "react";
import { Button } from "@/components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Products() {
  return (
    <>
      <section>
        <div className="py-16 container mx-auto">
          <div className="xs:text-center lg:text-start">
            <HeadTitle>TOP RATED</HeadTitle>
          </div>
          <div className="py-8 flex gap-8 justify-center">
            <Swiper
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2.5,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1330: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                }
              }}
              loop={true}
              centeredSlides={true}
            >
              {ProductsDummy.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardProduct
                    title={item.title}
                    genderCategory={item.genderCategory}
                    image={item.image}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center py-3">
            <Button>View All Products</Button>
          </div>
        </div>
      </section>
    </>
  );
}
