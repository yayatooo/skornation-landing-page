import { useTranslation } from "react-i18next"; // Replace next-intl with react-i18next

export default function Footer() {
  const { t } = useTranslation("footer"); // Use react-i18next for translations

  return (
    <>
      <footer className="bg-black py-8">
        <div className="flex w-10/12 mx-auto justify-center md:justify-between gap-8 text-[12px] text-graySecondary">
          <div className="w-[62px] h-[30px] lg:w-[102px] lg:h-[50px]">
            <img
              src="/assets/skor-logo-navbar.png"
              alt="navbar logo"
              className="w-full h-auto" // Use standard <img> tag
            />
          </div>
          <div className="flex gap-8 lg:text-lg">
            <div className="space-y-2">
              <p className="font-semibold text-white">{t("contactUs")}</p>
              <p>skor@bold-lifestyle.com</p>
              <a
                href="https://t.me/SKOR_Cambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t("telegram")}
              </a>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-white">{t("followUs")}</p>
              <a
                href="https://www.facebook.com/skornationcambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t("facebook")}
              </a>
              <a
                href="https://www.instagram.com/skor_cambodia/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@skor_cambodia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t("tiktok")}
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-graySecondary text-sm text-center border-y-1 py-2 bg-black">
        <p>
          © {new Date().getFullYear()} skornation.com, Inc. All Rights Reserved
        </p>
      </div>
    </>
  );
}
