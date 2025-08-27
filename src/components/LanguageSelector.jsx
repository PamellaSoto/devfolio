import { useTranslation } from "react-i18next";
import { BsGlobe2 } from "react-icons/bs";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
  };
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 cursor-pointer"
    >
      <BsGlobe2 />
      {t('menu.lang') == 'PT-BR' ? <span className="border-1 border-yellow-400 px-3 bg-yellow-400/25 rounded-xl">PT-BR</span> : <span>PT-BR</span>} / {t('menu.lang') == 'EN' ? <span className="border-1 border-yellow-400 px-3 bg-yellow-400/25 rounded-xl">EN</span> : <span>EN</span>}
    </button>
  );
};

export default LanguageSelector;
