import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function Sale() {
  return (
    <section className="flex">
      <Image
        src="/assets/promotion-img.png"
        width={810}
        height={500}
        alt="banner"
      />
      <div className="bg-secondary w-full flex flex-col justify-center items-center">
        <div className="w-8/12">
          <h1 className="font-bold text-8xl text-primary w-5/12">
            HOLIDAY SALE
          </h1>
          <h1 className="font-bold text-black text-6xl pt-3 pb-8">50% OFF</h1>
          <Button>Shop Holiday Sale</Button>
        </div>
      </div>
    </section>
  );
}
