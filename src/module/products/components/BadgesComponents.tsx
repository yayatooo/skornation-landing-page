import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { badges } from "@/utils/data";
import { Badge } from "@/components/ui/badge";

export const BadgesComponents = () => {
  const { t } = useTranslation("badges");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-1 lg:gap-3 justify-center w-10/12 lg:w-8/12 mx-auto py-8 lg:py-12"
    >
      {badges.map((badge, index) => {
        return (
          <Badge key={index} className="lg:text-3xl" variant="outline">
            {t(badge.key)}
          </Badge>
        );
      })}
    </motion.div>
  );
};
