import Image from "next/image";
import React from "react";

interface CollectionProps {
  id : number;
  image: string;
  title: string;
}

export const CardCollection = ({ id,image, title }: CollectionProps) => {
  return (
    <div className="relative px-6 w-[350px] h-[434px]" key={id}>
      <div>
        <Image
          src={image}
          fill
          alt="model"
          className="object-fill"
        />
      </div>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
        <h1 className="font-semibold text-3xl text-white p-6">{title}</h1>
      </div>
    </div>
  );
};
