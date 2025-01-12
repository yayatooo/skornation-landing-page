import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom"; // Use react-router-dom Link

interface ButtonDirectionProps {
  to: string; // Use `to` instead of `href`
  children: React.ReactNode;
  target?: "_self" | "_blank";
  className?: string;
}

export const ButtonDirection: React.FC<ButtonDirectionProps> = ({
  to,
  children,
  target = "_self",
  className = "",
}) => {
  const isExternal = target === "_blank";

  return (
    <Link
      to={to} // Use `to` prop
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`bg-black text-white font-semibold flex items-center gap-2 p-3 xl:text-2xl transform transition-transform duration-300 hover:scale-105 ${className}`}
    >
      {children} <ArrowRight className="text-redPrimary" />
    </Link>
  );
};

export default ButtonDirection;