import { useTranslation } from 'react-i18next'
import { Link, Element } from 'react-scroll'

import { IoIosArrowRoundUp } from 'react-icons/io'
import myPhoto from '../assets/pamella-soto.png'
import SocialMediaLinks from '../components/SocialMediaLinks'

const Hero = () => {
  const { t } = useTranslation()
  const hero = t('hero', { returnObjects: true })
  const navLinks = t('links', { returnObjects: true })

  return (
    <Element
      name={navLinks[0]}
      className="flex flex-col items-center py-20 sm:justify-between md:flex-row"
    >
      <img src={myPhoto} className="md:hidden" />
      <div className="md:w-2/3">
        <h1 className="text-center md:text-left">
          <span>{hero.subtitle}</span>
          {hero.title}
        </h1>

        <ul className="mt-4">
          {hero.list.map((item, key) => {
            return <li key={'hero_' + key}>{item}</li>
          })}
        </ul>

        <div className="mt-8 flex gap-4 sm:items-center md:mt-12">
          <Link
            className="btn-primary"
            to={navLinks[4]}
            smooth={true}
            duration={500}
          >
            {hero.contactBtn}
          </Link>
          <Link
            className="link inline-flex items-center"
            to={navLinks[2]}
            smooth={true}
            duration={500}
          >
            {hero.projectBtn}
            <IoIosArrowRoundUp size={22} className="inline-block rotate-45" />
          </Link>
        </div>
      </div>
      <div className="hidden items-center md:flex md:w-3/4 md:flex-col xl:flex-row">
        <img src={myPhoto} className="hover:scale-105" />
        <SocialMediaLinks
          css={'md:inline-flex md:flex-row xl:flex-col xl:ml-6 '}
        />
      </div>
    </Element>
  )
}

export default Hero
