import { SwiperAbout } from "@/module/about/components/SwiperAbout";
import { useTranslation } from "react-i18next";
// import { BadgeContainer } from "./BadgeContainer";
import { BadgesComponents } from "@/module/products/components/BadgesComponents";

export const SwiperDetailAbout = () => {
  const { t } = useTranslation("AboutUs");

  return (
    <section className="mb-4">
      <SwiperAbout />
      <div className="lg:text-3xl text-center mt-12 w-10/12 mx-auto">
        <h1>{t("SwiperProfile")}</h1>{" "}
        {/* Use translations from the "AboutUs" namespace */}
      </div>
      <BadgesComponents />
    </section>
  );
};

export default SwiperDetailAbout;
