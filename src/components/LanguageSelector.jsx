import { useTranslation } from 'react-i18next'
import { BsGlobe2 } from 'react-icons/bs'

const LanguageSelector = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt'
    i18n.changeLanguage(newLang)
  }
  return (
    <button onClick={toggleLanguage}>
      <BsGlobe2 size={20} />
      <div className="md:hidden">
        {t('menu.lang') == 'PT-BR' ? <span>PT-BR</span> : <span>PT-BR</span>} /{' '}
        {t('menu.lang') == 'EN' ? <span>EN</span> : <span>EN</span>}
      </div>
    </button>
  )
}

export default LanguageSelector
