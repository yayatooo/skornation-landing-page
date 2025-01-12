import { Heading } from "@/components/ui/Heading";
import { useTranslation } from "react-i18next";
import CardBrands from "./BrandCard";
import { Brands } from "@/utils/data";

export const BrandContainer = () => {
  const { t } = useTranslation("BrandPage");

  return (
    <>
      <div className="w-full py-4 xl:py-12" id="brand">
        <section className="w-10/12 mx-auto text-center py-2  sm:pt-4 sm:pb-8">
          <Heading>{t("Title")}</Heading>
        </section>

        <div className="w-10/12 xl:w-8/12 mx-auto grid grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {Brands.map((item) => (
            <CardBrands
              key={item.id}
              image={item.image}
              title={item.title}
              width={item.width}
              height={item.height}
            />
          ))}
        </div>
      </div>
    </>
  );
};
