import React from "react";
import { OurGallery } from "./components/OurGallery";
import { AboutUs } from "./components/AboutUs";

export default function About() {
  return (
    <>
      <section className="bg-primary h-[534px] pt-16">
        <AboutUs />
      </section>
      <section className="xs:pt-8 lg:pt-64">
        <OurGallery />
      </section>
    </>
  );
}
