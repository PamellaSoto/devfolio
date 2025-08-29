import { useTranslation } from 'react-i18next'
import { Link, Element } from 'react-scroll'

import { IoIosArrowRoundUp } from 'react-icons/io'
import myPhoto from '../assets/pamella-soto.png'

const Hero = () => {
  const { t } = useTranslation()
  const hero = t('hero', { returnObjects: true })
  const navLinks = t('links', { returnObjects: true })

  return (
    <Element
      name={navLinks[0]}
      className="py-13 md:flex md:flex-row-reverse md:items-center md:justify-between"
    >
      <img src={myPhoto} className="hover:scale-105" />
      <div>
        <h1 className="text-center md:text-left">
          <span>{hero.subtitle}</span>
          {hero.title}
        </h1>

        <ul className="mt-4">
          {hero.list.map((item, key) => {
            return <li key={'hero_' + key}>{item}</li>
          })}
        </ul>

        <div className="mt-8 flex gap-4 md:mt-15">
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
    </Element>
  )
}

export default Hero
