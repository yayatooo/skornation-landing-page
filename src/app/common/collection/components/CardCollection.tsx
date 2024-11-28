import Image from "next/image";
import React from "react";

interface CollectionProps {
  id : number;
  image: string;
  title: string;
}

export const CardCollection = ({ id,image, title }: CollectionProps) => {
  return (
    <div className="relative w-[380px] h-[464px]" key={id}>
      <div>
        <Image
          src={image}
          width={380}
          height={464}
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
