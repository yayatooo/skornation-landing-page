import { Mail } from "lucide-react";
import React from "react";

export default function Promo() {
  return (
    <section className="bg-secondary py-14">
      <div className="container mx-auto bg-primary w-full xs:h-[240px] lg:h-[480px]  space-y-6 text-center flex flex-col justify-center items-center">
        <h1 className="lg:text-6xl xs:text-3xl text-white">Subscribe & Claim Voucher</h1>
        <h1 className="lg:text-7xl xs:text-4xl font-bold text-white">10% OFF</h1>
        <div className="flex">
          <input
            placeholder="Enter your email Address..."
            className="lg:w-[455px] xs:w-[220px]  h-[47px] px-3 outline-none"
          />
          <div className="bg-white h-[47px] flex items-center justify-center px-2 cursor-pointer">
            <Mail />
          </div>
        </div>
      </div>
    </section>
  );
}
