import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DetailAbout = () => {
  const { t } = useTranslation("AboutUs");
  return (
    <section className="my-4 w-10/12 mx-auto lg:my-12">
      <div className="">
        <div className="mx-auto">
          {/* <!-- Flex Container for Text and Image --> */}
          <div className="flex flex-col md:flex-row w-full py-3 gap-6 items-center">
            {/* <!-- Text Section --> */}
            <motion.div
              className="space-y-4 w-full md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-black flex items-center gap-4 font-bold text-xl lg:text-6xl">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link to="/">
                        <ArrowLeft size={35} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className="bg-white">
                      <p>Back to Home Page</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <h1 className="w-full md:text-start">{t("Title")}</h1>
              </div>
              <p className="text-black font-normal text-sm lg:text-xl xl:text-2xl">
                {t("Description")}
              </p>
              <p className="text-black font-normal text-sm lg:text-xl xl:text-2xl">
                {t("SubDescription")}
              </p>
            </motion.div>

            {/* <!-- Image Section --> */}
            <motion.div
              className="flex w-full md:w-1/2 justify-center"
              initial={{ filter: "blur(6px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.2, delay: 0.5, ease: "linear" }}
            >
              <img
                src="/gallery/gallery-5.png"
                alt="gallery"
                className="object-contain w-full h-auto" // Use standard <img> tag
              />
            </motion.div>
          </div>

          <div className="font-extrabold text-redPrimary w-5/12 md:w-full md:text-center text-4xl md:my-4 lg:my-6 lg:text-7xl">
            <h1 className="">&quot;{t("HeadLine")}&quot;</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
