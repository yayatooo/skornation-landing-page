import Image from "next/image";
import React from "react";

export const GalleryPlacement = () => {
  return (
    <div className="flex flex-col gap-x-4 gap-y-4 lg:flex-row lg:gap-y-0 py-12 justify-between">
      <div>
        <Image
          src="/assets/gallery-3.png"
          width={760}
          height={760}
          alt="gallery"
        />
      </div>
      <div>
        <Image
          src="/assets/gallery-4.png"
          width={760}
          height={760}
          alt="gallery"
        />
      </div>
    </div>
  );
};
