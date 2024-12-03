import React from "react";
import { HeaderPlacement } from "./HeaderPlacement";
import { GalleryPlacement } from "./GalleryPlacement";
import { FooterPlacement } from "./FooterPlacement";

export default function Placement() {
  return (
    <section>
      <div className="container mx-auto py-12">
        <HeaderPlacement />
        <GalleryPlacement />
        <FooterPlacement />
      </div>
    </section>
  );
}
