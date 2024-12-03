import { Navlink } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { Facebook } from "./icons/Facebook";
import { Instagram } from "./icons/Instagram";
import { Telegram } from "./icons/Telegram";
import { X } from "lucide-react";
import clsx from "clsx";

interface SidebarProps {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void;
}

export const NavMobile = ({ openMenu, setOpenMenu }: SidebarProps) => {
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 h-screen w-8/12 bg-primary text-center py-20 text-xl font-semibold text-white flex flex-col lg:hidden transition-all",
        openMenu ? "left-0" : "-left-[200%]"
      )}
    >
      {/* Close Button */}
      <div className="absolute top-10 left-8">
        <X onClick={handleCloseMenu} />
      </div>
      {/* Navigation Links */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        {Navlink.map((item) => (
          <div key={item.id}>
            <Link href={item.href}>{item.name}</Link>
          </div>
        ))}
      </div>
      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center mt-auto pb-6">
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
    </div>
  );
};
