import { Brands } from "@/utils/data";
import { motion } from "framer-motion"; // Replace motion/react-client with framer-motion
import { useTranslation } from "react-i18next";

export const BrandDetailAbout = () => {
  const { t } = useTranslation("AboutUs");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="bg-redPrimary text-white text-center px-4 py-4 md:py-12 space-y-4 lg:space-y-8 mb-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the component is in view
      variants={containerVariants}
    >
      {/* Title */}
      <motion.div variants={childVariants}>
        <h1 className="font-bold text-lg uppercase md:text-4xl md:text-center lg:text-5xl">
          {t("BrandsProfile")}
        </h1>
      </motion.div>

      {/* Brands Grid */}
      <motion.div
        className="w-10/12 xl:w-6/12 mx-auto grid grid-cols-4 gap-4"
        variants={containerVariants}
      >
       {Brands.map((item) => (
          <motion.div
            className="relative w-full max-w-[120px] aspect-square mx-auto flex items-center justify-center p-2 rounded-lg" // Add padding and background
            key={item.id}
            variants={childVariants}
          >
            <img
              src={item.logo}
              alt={item.title}
              className="object-contain w-full h-full" // Ensure the logo fits within the container
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Description */}
      <motion.div
        className="text-white font-medium text-sm md:text-xl xl:text-2xl md:w-8/12 md:mx-auto"
        variants={childVariants}
      >
        <h1>{t("BrandsProfileDescription")}</h1>
      </motion.div>
    </motion.section>
  );
};

export default BrandDetailAbout;