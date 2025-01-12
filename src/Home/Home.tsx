import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import AboutSection from "@/module/about/About";
import Brands from "@/module/brand/Brands";
import Banner from "@/module/home.tsx/Banner";
import Products from "@/module/products/Products";
import StorePage from "@/module/store/Store";

export default function Home() {

  return (
    <>
    <Navbar />
    <Banner />
    <Brands />
    <AboutSection />
    <Products />
    <StorePage />
    <Footer />
    </>
  );
}
