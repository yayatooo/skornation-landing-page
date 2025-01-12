import { useState } from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { DropdownSwitch } from "./DropdownSwitch";
import { Navlink } from "@/utils/data";
import { motion } from "framer-motion";



export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { t } = useTranslation("nav");

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const scrollToSection = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = offset;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <motion.nav
        className="bg-white sticky top-0 m-0 z-20 w-full py-3 lg:py-5 shadow-sm"
        animate={{ y: 0 }}
        initial={{ y: -140 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-10/12 mx-auto flex justify-between items-center">
          <div className="lg:hidden">
            <Menu onClick={handleOpenMenu} />
          </div>
          <div className="w-[62px] h-[30px] lg:w-[102px] lg:h-[50px]">
            <Link to="/"> {/* Replace href with to */}
              <img
                src="/assets/skor-logo-navbar.png" // Replace Image with img
                width={102}
                height={50}
                alt="navbar logo"
                className="object-cover"
              />
            </Link>
          </div>

          <div className="hidden lg:flex gap-12 font-semibold text-2xl">
            {Navlink.map((item) => (
              <div key={item.id}>
                <button
                  onClick={() => scrollToSection(item.href.replace("#", ""), -75)}
                  className="hover:text-red-700 transition-colors"
                >
                  {t(item.translationKey)}
                </button>
              </div>
            ))}
          </div>
          <div>
            <DropdownSwitch />
          </div>
        </div>
      </motion.nav>
    </>
  );
};