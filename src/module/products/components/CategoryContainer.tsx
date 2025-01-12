import { DescriptionHeading } from "@/components/ui/Description";
import { Heading } from "@/components/ui/Heading";
import { useTranslation } from "react-i18next";
import { CategoryCard } from "./CategoryCard";
import { BadgesComponents } from "./BadgesComponents";

export const CategoryContainer = () => {
  const {t} = useTranslation("CollectionPage");

  return (
    <section className="w-full mx-auto mt-8">
      <div className="flex justify-end w-full">
        <div className="w-full mx-auto text-center">
          <div className="py-4 xl:py-12 w-10/12 xl:w-8/12 mx-auto">
            <Heading>{t("Title2")}</Heading>
            <DescriptionHeading>{t("Description")}</DescriptionHeading>
          </div>
          <CategoryCard />
            <BadgesComponents />
        </div>
      </div>
    </section>
  );
};