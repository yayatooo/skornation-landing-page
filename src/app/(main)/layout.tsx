import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="bg-secondary">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
