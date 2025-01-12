import { motion } from "framer-motion";

interface BrandCardProps {
  id?: number;
  image: string;
  title: string;
  width: number;
  height: number;
}

export const CardBrands = ({ image, title }: BrandCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", scale: 0 }}
      animate={{ filter: "blur(0px)", scale: 1 }}
      transition={{ duration: 1 }}
      className="group relative w-full"
    >
      <div className="relative w-full aspect-[2/4] bg-gray-100">
        <img
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
        />
      </div>
    </motion.div>
  );
};

export default CardBrands;