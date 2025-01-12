import { Category } from "@/utils/data";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const CategoryCard = () => {
  const { t } = useTranslation("category");

  return (
    <div className="grid grid-cols-3">
      {Category.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full aspect-[4/4] max-h-[540px]">
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full" // Ensure the image fills the container
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-black/70 to-transparent p-4">
              <h1 className="font-semibold text-base md:text-lg lg:text-xl xl:text-3xl text-white">
                {t(item.title)} {/* Use translation for the title */}
              </h1>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
