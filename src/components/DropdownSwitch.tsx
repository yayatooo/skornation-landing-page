import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "./context/LanguageContext";
import { useTranslation } from "react-i18next";
import { useTransition } from "react";

export const DropdownSwitch = () => {
  const [isPending, startTransition] = useTransition();
  const { i18n } = useTranslation();
  const { language, setLanguage } = useLanguage(); // Get language and setLanguage from context

  const onSelectChange = (value: string) => {
    const nextLocale = value;
    startTransition(() => {
      i18n.changeLanguage(nextLocale); // Change the language using react-i18next
      setLanguage(nextLocale); // Update the language in context
    });
  };

  return (
    <Select
      defaultValue={language}
      disabled={isPending}
      onValueChange={onSelectChange}
    >
      <SelectTrigger className="py-0 w-14" aria-label="Select Language">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectItem value="en">
            <div className="flex gap-2">
              <img
                src="/assets/usa-flag-round-circle-icon.svg"
                width={23}
                height={23}
                alt="USA flag"
                className="object-cover"
              />
              <h1>English</h1>
            </div>
          </SelectItem>
          <SelectItem value="kh">
            <div className="flex gap-2">
              <img
                src="/assets/cambodia-flag.svg"
                width={23}
                height={23}
                alt="Cambodia flag"
                className="object-cover"
              />
              <h1>Khmer</h1>
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};