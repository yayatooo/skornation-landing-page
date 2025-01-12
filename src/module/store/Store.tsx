import { socialLinks } from "@/utils/data";
import Address from "./components/Address";


export default function StorePage() {

  const iconClasses = "w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 stroke-black";

  return (
    <div className="w-full mx-auto">
      
      {/* Social Media Links */}
      <div className="flex gap-8 lg:gap-24 justify-center py-6 border-y-2 mt-12 xl:mt-20 border-y-black">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
            aria-label={label}
          >
            <Icon className={iconClasses} />
          </a>
        ))}
      </div>

      {/* Address Section */}
      <div className="mb-8">
        <Address />
      </div>
    </div>
  );
}