
import React from "react";
import { Banner } from "./components/Banner";
import About from "../about/page";
import Sale from "../Sale/page";
import Brand from "../Brands/page";
import Store from "../store/page";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Brand />
      <Sale />
      <Store />
    </>
  );
}
