import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { BannerSlide } from "@/utils/data"; // Update the import path
import styles from "./banner.module.css"; // Ensure this path is correct
import { motion } from "framer-motion";

export const Banner = () => {
  // Calculate minimum slides needed for loop
  const minSlidesForLoop = Math.max(
    1.5, // Largest slidesPerView value
    BannerSlide.length
  );

  // Check if we have enough slides for loop
  const shouldEnableLoop = BannerSlide.length >= minSlidesForLoop;

  // Create duplicated slides array if needed
  const slidesData = shouldEnableLoop
    ? BannerSlide
    : [...BannerSlide, ...BannerSlide];

  return (
    <section className="w-full relative" id="home">
      <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
        <Swiper
          modules={[Autoplay, Pagination]}
          breakpoints={{
            350: {
              slidesPerView: Math.min(1.2, slidesData.length),
              spaceBetween: 10,
            },
            768: {
              slidesPerView: Math.min(1.2, slidesData.length),
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: Math.min(1.5, slidesData.length),
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={shouldEnableLoop}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.paginationBulletActive}`,
          }}
          centeredSlides={true}
          className="h-full w-full"
          watchOverflow={true}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <motion.div
                className="relative w-full h-full"
                initial={{ filter: "blur(10px)", scale: 0 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Banner;