import { Button } from "@/components/Button";
import Image from "next/image";
import React from "react";

export const FooterPlacement = () => {
  return (
    <div className="bg-[#333333] h-[140px] gap-3 flex justify-between items-center px-6 py-3">
      <div>
        <Image
          src="/assets/bold-logo-white.png"
          width={214}
          height={110}
          alt="Logo"
        />
      </div>
      <div className="xs:pb-1 lg:pb-0">

      <Button>About Us</Button>
      </div>
    </div>
  );
};
