import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <Image
        src="/assets/promotion-img.png"
        width={810}
        height={500}
        alt="banner"
      />
      <div>
        <h1 className="font-bold text-8xl text-primary w-3/12">HOLIDAY SALE</h1>
        <h1 className="font-semibold text-black text-2xl pt-3 pb-8">
          50% OFF 
        </h1>
        <Button>Shop Holiday Sale</Button>
      </div>
    </section>
  );
}
