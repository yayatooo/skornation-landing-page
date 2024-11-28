import { Brands } from "@/utils/data";
import Image from "next/image";
import React from "react";

export default function Brand() {
  return (
    <section className="bg-secondary pb-20">
      <div className="container mx-auto">
        <div className="flex">
          <div className="bg-primary w-[380px] h-[295px] text-white p-10 flex flex-col justify-between">
            <h1 className="font-bold text-5xl">
              Our <br /> Brands
            </h1>
            <p className="font-medium text-xl">Official Distributor</p>
          </div>
          {Brands.map((item) => (
            <div
              key={item.id}
              className="bg-black w-[380px] h-[295px] flex items-center justify-center"
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
    </section>
  );
}
