import { Navbar } from "@/components/Navbar";
import React from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default MainLayout;
