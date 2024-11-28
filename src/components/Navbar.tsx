import React from "react";
import { LogoNavbar } from "./Logo";
import { Navlink } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { Facebook } from "./icons/Facebook";
import { PromotionLine } from "./PromotionLine";
import { Instagram } from "./icons/Instagram";
import { Telegram } from "./icons/Telegram";

export const Navbar = () => {
  return (
    <>
      {/* <PromotionLine /> */}
      <nav className="bg-white sticky py-6 top-0 z-50 shadow-lg">
        <section className="container mx-auto flex justify-between items-center">
          <div>
            <Image
              src="/assets/skor-logo-navbar.png"
              width={116}
              height={48}
              alt="Logo"
            />
          </div>
          <div className="flex gap-8">
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
          <div className="flex gap-x-12">
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
        </section>
      </nav>
    </>
  );
};
