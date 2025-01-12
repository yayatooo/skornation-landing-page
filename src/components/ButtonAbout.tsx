import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const ButtonAbout = () => {
  const { t } = useTranslation("Button"); // Use react-i18next for translations

  return (
    <Link
      to="/about" // Replace href with to
      className="bg-black text-white font-semibold flex justify-start items-center gap-2 p-3 xl:text-2xl transform transition-transform duration-300 hover:scale-105"
    >
      {t("discoverMore")} <ArrowRight className="text-redPrimary" />
    </Link>
  );
};

export default ButtonAbout;