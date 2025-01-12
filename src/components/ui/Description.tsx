import React from "react";
import * as motion from "motion/react-client";
import { ChildrenProps } from "@/utils/types";

export const DescriptionHeading: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.p
      className="text-sm font-medium py-2 lg:text-2xl xl:text-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
};
