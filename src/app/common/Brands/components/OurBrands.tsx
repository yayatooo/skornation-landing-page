import { Brands } from "@/utils/data";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OurBrands() {
  return (
    <section className="pb-20">
      <div className="container mx-auto">
        <div className="flex xs:gap-4 lg:gap-0">
          <div className="bg-primary w-[380px] h-[295px] text-white xs:p-5 lg:p-10 flex-shrink-0 flex flex-col justify-between">
            <h1 className="font-bold text-5xl">
              Our <br /> Brands
            </h1>
            <div className="flex justify-between pr-10">
              <p className="font-medium lg:text-xl">Official Distributor</p>
              <CircleArrowRight />
            </div>
          </div>
          <div className=" flex overflow-x-auto whitespace-nowrap">
            {Brands.map((item) => (
              <div
                key={item.id}
                className="bg-black  w-[350px] h-[295px] flex-shrink-0 flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  width={item.width} // Adjust size as needed
                  height={item.height} // Adjust size as needed
                  alt={item.title}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
