import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { ProductsDummy } from "@/utils/data"; // Ensure this path is correct

export const CardProduct = () => {
  // Check if there are enough slides for looping
  const hasEnoughSlides = ProductsDummy.length >= 3;

  return (
    <div className="mt-6">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          650: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
        }}
        loop={hasEnoughSlides} // Enable loop only if there are enough slides
        centeredSlides={true}
        slidesPerGroup={1}
        className="w-full"
      >
        {/* Double the slides if we need looping */}
        {[...ProductsDummy, ...(hasEnoughSlides ? ProductsDummy : [])].map(
          (item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <div className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <motion.div
                  className="relative w-full aspect-square overflow-hidden"
                  initial={{ filter: "blur(6px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 1, ease: "linear" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                  />
                </motion.div>

                {/* Content Container */}
                <div className="flex justify-between items-center px-2 py-3">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg truncate pr-2">
                    {item.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default CardProduct;
