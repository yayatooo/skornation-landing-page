import React from "react";
import * as motion from "motion/react-client";
import { ChildrenProps } from "@/utils/types";



export const Heading: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <motion.h1
      className="font-extrabold text-xl text-redPrimary py-0 xl:py-4 lg:text-4xl xl:text-5xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
};