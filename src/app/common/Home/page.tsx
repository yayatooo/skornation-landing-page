
import React from "react";
import { Banner } from "./components/Banner";
import About from "../about/page";
import Products from "../Products/page";
import Sale from "../Sale/page";
import Brand from "../Brands/page";
import Collection from "../collection/page";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Brand />
      <Collection />
      <Products />
    </>
  );
}
