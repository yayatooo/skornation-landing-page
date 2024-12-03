import { CircleArrowDown } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HeaderPlacement = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
      <p className="lg:w-6/12 xs:w-full lg:text-2xl xs:text-lg xs:py-4 lg:py-0">
        <span className="font-bold">Bold Lifestyle</span> is a newly established
        multi-brandsports company, operating the store SKOR, thatseamlessly
        blends performance with lifestyle. We arededicated to providing
        high-quality sports appareland lifestyle products.
      </p>
      <div className="flex items-stretch">
        <Image src="/assets/logo.png" width={337} height={165} alt="Logo" />
        <CircleArrowDown
          className="rotate-180 text-[#AFAFAF] self-end"
          size={90}
        />
      </div>
    </div>
  );
};
