import Image from "next/image";
import React from "react";
import { LinkFooter } from "./LinkFooter";

export const Footer = () => {
  return (
    <footer className="bg-[#333333] py-8">
      {/* <div className="bg-white w-full h-[2px] container mx-auto z-40"></div> */}
      <div className="flex xs:flex-col lg:flex-row justify-between text-white container mx-auto py-12">
        <div className="flex justify-center">
          <Image src="/assets/logo.png" width={337} height={165} alt="Logo" className="xs:hidden lg:inline" />
          <Image src="/assets/logo.png" width={115} height={100} alt="Logo" className="xs:inline lg:hidden" />
        </div>
        <LinkFooter />
      </div>
      <div className="container mx-auto">
        <div className="bg-[#AFAFAF] w-full h-[2px] "></div>
        <p className="text-right py-2 text-[#AFAFAF] font-medium">
        {new Date().getFullYear()} Skor Cambodia, LLC. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
