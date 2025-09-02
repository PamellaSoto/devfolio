import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Link } from 'react-scroll'
import LanguageSelector from './LanguageSelector'

import { HiBars3, HiXMark } from 'react-icons/hi2'

const Menu = () => {
  const { t } = useTranslation()
  const menu = t('menu', { returnObjects: true })
  const menuLinks = t('links', { returnObjects: true })

  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <>
      <button onClick={toggleDropdown} className="lg:hidden">
        {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
      </button>
      {isOpen && (
        <nav className="bg-new-black absolute top-15 right-2 rounded-lg border-1 px-6 py-4">
          <ul>
            <li className="mt-0 border-b-1 pb-2">
              <LanguageSelector />
            </li>
            <li>
              <Link
                className="btn-secondary block w-full px-2 py-1"
                to={menuLinks[0]}
                smooth={true}
                duration={500}
              >
                {menu.home}
              </Link>
            </li>
            <li>
              <Link
                className="btn-secondary block w-full px-2 py-1"
                to={menuLinks[1]}
                smooth={true}
                duration={500}
              >
                {menu.skills}
              </Link>
            </li>
            <li>
              <Link
                className="btn-secondary block w-full px-2 py-1"
                to={menuLinks[2]}
                smooth={true}
                duration={500}
              >
                {menu.projects}
              </Link>
            </li>
            <li>
              <Link
                className="btn-secondary block w-full px-2 py-1"
                to={menuLinks[3]}
                smooth={true}
                duration={500}
              >
                {menu.about}
              </Link>
            </li>
            <li>
              <Link
                className="btn-secondary block w-full px-2 py-1"
                to={menuLinks[4]}
                smooth={true}
                duration={500}
              >
                {menu.contact}
              </Link>
            </li>
            <li>
              <a className="btn-secondary block w-full px-2 py-1" href="#LINK">
                {menu.resume}
              </a>
            </li>
          </ul>
        </nav>
      )}

      <nav className="hidden lg:flex">
        <ul className="mr-7 flex gap-5 border-r pr-7 uppercase">
          <li>
            <Link
              className="btn-secondary"
              to={menuLinks[1]}
              smooth={true}
              duration={500}
            >
              {menu.skills}
            </Link>
          </li>
          <li>
            <Link
              className="btn-secondary"
              to={menuLinks[2]}
              smooth={true}
              duration={500}
            >
              {menu.projects}
            </Link>
          </li>
          <li>
            <Link
              className="btn-secondary"
              to={menuLinks[3]}
              smooth={true}
              duration={500}
            >
              {menu.about}
            </Link>
          </li>
          <li>
            <Link
              className="btn-secondary"
              to={menuLinks[4]}
              smooth={true}
              duration={500}
            >
              {menu.contact}
            </Link>
          </li>
          <li>
            <a className="btn-secondary" href="#LINK">
              {menu.resume}
            </a>
          </li>
        </ul>
        <LanguageSelector />
      </nav>
    </>
  )
}

export default Menu
