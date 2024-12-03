"use client";
import React, { useState } from "react";
import { Navlink } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Telegram } from "./icons/Telegram";
import { AlignJustify } from "lucide-react";
import { NavMobile } from "./NavMobile";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <>
      <NavMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <nav className="bg-white sticky py-2 lg:py-6 top-0 z-30 shadow-lg">
        <section className="container mx-auto flex justify-between items-center">
          <div className="lg:hidden">
            <AlignJustify onClick={handleOpenMenu} />
          </div>
          <div>
            <Image
              src="/assets/skor-logo-navbar.png"
              width={116}
              height={48}
              alt="Logo"
              className="xs:hidden lg:inline"
            />
            <Image
              src="/assets/skor-logo-navbar.png"
              width={83}
              height={48}
              alt="Logo"
              className="lg:hidden"
            />
          </div>
          <div className="lg:flex gap-8 xs:hidden">
            {Navlink.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="font-semibold text-lg text-black hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:flex gap-x-12 xs:hidden">
            <div className="flex gap-6">
              <Link href="/">
                <Facebook />
              </Link>
              <Link href="/">
                <Instagram />
              </Link>
              <Link href="/">
                <Telegram />
              </Link>
            </div>
            <div>
              <div className="w-[25px] h-[25px] rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="w-[25px] h-[25px] rounded-full bg-primary lg:hidden"></div>
        </section>
      </nav>
    </>
  );
};
