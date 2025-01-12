import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import * as motion from "motion/react-client";
import styles from "./about.module.css";
import { Pagination } from "swiper/modules";
import { GallerySlide } from "@/utils/data";

export const SwiperAbout = () => {


  return (
    <section className="w-full relative">
    <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
      <Swiper
        modules={[Pagination]}
        breakpoints={{
          350: {
            slidesPerView:1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView:1.2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        className="h-full w-full"
        watchOverflow={true}
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.paginationBulletActive}`,
          el: `.${styles.swiperPagination}`,
        }}
      >
        {GallerySlide.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <motion.div
                className="relative w-full h-full"
                initial={{ filter: "blur(6px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 1, ease: "linear" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={styles.swiperPagination}></div>
    </div>
  </section>
  );
};