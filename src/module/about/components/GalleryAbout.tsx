import { Heading } from "@/components/ui/Heading";
import { DescriptionHeading } from "@/components/ui/Description";
import { useTranslation } from "react-i18next";
import { SwiperAbout } from "./SwiperAbout";

export const GalleryAbout = () => {

  const {t} = useTranslation('AboutStore')

  return (
    <section>
      <div className="w-10/12 text-center flex flex-col items-center justify-end mx-auto py-4 xl:py-12">
        <Heading>{t('Title')}</Heading>
        <DescriptionHeading>
          {t('Description')}
        </DescriptionHeading>
      </div>
      <div>
        <SwiperAbout />
      </div>
    </section>
  );
};