import React from "react";
import Image from "next/image";
import { ProductCardProps } from "@/types/data";

export const CardProduct = ({
  image,
  title,
  genderCategory
}: ProductCardProps) => {
  return (
    <div className=" w-[340px] lg:w-[479px] bg-white">
      <div className="relative lg:w-[479px] lg:h-[479px] w-[340px] h-[340px]">
        <Image
          src={image}
          alt="product"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="px-3 py-2">
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="font-normal text-[#848484] pt-1 pb-2">{genderCategory}</p>
      </div>
    </div>
  );
};
