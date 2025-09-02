import { useTranslation } from 'react-i18next'
import { BsGlobe2 } from 'react-icons/bs'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }
  return (
    <button className="flex items-center gap-4" onClick={toggleLanguage}>
      <BsGlobe2 size={20} />
      <div className="flex items-center gap-2 lg:hidden">
        {t('menu.lang') == 'PT-BR' ? (
          <span className="hover:bg-purple/50 rounded-lg px-2 py-1">PT-BR</span>
        ) : (
          <span className="bg-purple rounded-lg px-2 py-1">PT-BR</span>
        )}{' '}
        /
        {t('menu.lang') == 'EN' ? (
          <span className="hover:bg-purple/50 rounded-lg px-2 py-1">EN</span>
        ) : (
          <span className="bg-purple rounded-lg px-2 py-1">EN</span>
        )}
      </div>
    </button>
  )
}

export default LanguageSelector
