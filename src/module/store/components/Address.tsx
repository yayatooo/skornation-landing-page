import ButtonDirection from "@/components/ButtonDirection"; // Ensure this path is correct
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Address = () => {
  const { t } = useTranslation("Address");

  return (
    <section
      id="store"
      className="w-10/12 mx-auto lg:flex lg:justify-center lg:gap-8 my-14 xl:my-20"
    >
      <div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-lg">
            <img
              src="/assets/outline.svg"
              alt="store"
              className="w-full h-auto object-contain" // Use standard <img> tag
            />
          </div>
        </div>
      </div>

      <div className="text-start lg:text-3xl xl:w-3/12 flex flex-col lg:justify-around">
        <div className="flex justify-center items-center lg:justify-start pt-4">
          <MapPin className="text-redPrimary mr-2" />
          <h1 className="font-extrabold cursor-pointer">SKOR CAMBODIA</h1>
        </div>
        <div className="font-medium text-sm lg:text-2xl text-center lg:text-start pb-4">
          <p>{t("address")}</p>
        </div>
        <div className="flex justify-center lg:justify-start">
          <ButtonDirection
            to="https://maps.app.goo.gl/GNiMABpA4Q5yQHvr6"
            target="_blank"
          >
            {t("getDirection")}
          </ButtonDirection>
        </div>
      </div>
    </section>
  );
};

export default Address;