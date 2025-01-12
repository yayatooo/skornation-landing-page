import { Navlink, socialLinks } from "@/utils/data"; // Ensure this path is correct
import clsx from "clsx";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define TypeScript interfaces for Navlink and socialLinks
interface NavlinkItem {
  id: number;
  href: string;
  translationKey: string;
}

interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

interface SidebarProps {
  openMenu: boolean;
  setOpenMenu: (isOpen: boolean) => void;
}

export const SideBar = ({ openMenu, setOpenMenu }: SidebarProps) => {
  const { t } = useTranslation("nav"); // Uncomment and use the translation hook

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const scrollToSection = (elementId: string, offset: number = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = offset;
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      handleCloseMenu();
      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    }
  };

  const iconClasses = "w-6 h-6 md:w-8 md:h-8 lg:w-14 lg:h-14 stroke-black";

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 h-screen w-8/12 bg-white text-center py-20 text-xl font-semibold text-redPrimary flex flex-col lg:hidden transition-all",
        openMenu ? "left-0" : "-left-[200%]"
      )}
    >
      {/* Close Button */}
      <div className="absolute top-14 left-14">
        <X onClick={handleCloseMenu} className="cursor-pointer" />
      </div>

      {/* Navigation Links */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        {Navlink.map((item: NavlinkItem) => (
          <div key={item.id}>
            <button
              onClick={() => scrollToSection(item.href.replace("#", ""), -65)}
              className="hover:text-red-700 transition-colors"
            >
              {t(item.translationKey)} {/* Use translation key */}
            </button>
          </div>
        ))}
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 justify-center mt-auto pb-6">
        {socialLinks.map(({ href, icon: Icon, label }: SocialLink) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
            aria-label={label}
          >
            <Icon className={iconClasses} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
