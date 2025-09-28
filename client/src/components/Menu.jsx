import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import LanguageSelector from './LanguageSelector'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const MobileMenu = ({ menuLinks, menuLabels, closeMenu }) => {
  return (
    <div className="bg-new-black fixed top-20 right-4 z-50 rounded-lg px-6 py-4 shadow-lg lg:hidden">
      <ul className="flex flex-col gap-3">
        <li className="mt-0 border-b-1 pb-2">
          <LanguageSelector />
        </li>
        <li>
          <HashLink
            smooth
            className="btn-secondary block w-full text-left"
            to={`#${menuLinks[0]}`}
            onClick={closeMenu}
          >
            {menuLabels.home}
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            className="btn-secondary block w-full text-left"
            to={`#${menuLinks[1]}`}
            onClick={closeMenu}
          >
            {menuLabels.projects}
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            className="btn-secondary block w-full text-left"
            to={`#${menuLinks[2]}`}
            onClick={closeMenu}
          >
            {menuLabels.skills}
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            className="btn-secondary block w-full text-left"
            to={`#${menuLinks[3]}`}
            onClick={closeMenu}
          >
            {menuLabels.about}
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            className="btn-secondary block w-full text-left"
            to={`#${menuLinks[4]}`}
            onClick={closeMenu}
          >
            {menuLabels.contact}
          </HashLink>
        </li>
        <li>
          <a
            className="btn-secondary block w-full text-left"
            href="https://drive.google.com/drive/folders/1Ucbikn6F80XXt8umzWzRJQFPBBYXw09x?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {menuLabels.resume}
          </a>
        </li>
      </ul>
    </div>
  )
}

const DesktopMenu = ({ menuLinks, menuLabels }) => {
  return (
    <nav className="hidden items-center gap-5 lg:flex">
      <ul className="mr-7 flex gap-5 border-r pr-7">
        <li>
          <HashLink smooth className="btn-secondary" to={`#${menuLinks[0]}`}>
            {menuLabels.home}
          </HashLink>
        </li>
        <li>
          <HashLink smooth className="btn-secondary" to={`#${menuLinks[1]}`}>
            {menuLabels.projects}
          </HashLink>
        </li>
        <li>
          <HashLink smooth className="btn-secondary" to={`#${menuLinks[2]}`}>
            {menuLabels.skills}
          </HashLink>
        </li>
        <li>
          <HashLink smooth className="btn-secondary" to={`#${menuLinks[3]}`}>
            {menuLabels.about}
          </HashLink>
        </li>
        <li>
          <HashLink smooth className="btn-secondary" to={`#${menuLinks[4]}`}>
            {menuLabels.contact}
          </HashLink>
        </li>
        <li>
          <a
            className="btn-secondary"
            href="https://drive.google.com/drive/folders/1Ucbikn6F80XXt8umzWzRJQFPBBYXw09x?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {menuLabels.resume}
          </a>
        </li>
      </ul>
      <LanguageSelector />
    </nav>
  )
}

const Menu = () => {
  const { t } = useTranslation()
  const menuLabels = t('menu', { returnObjects: true })
  const menuLinks = t('links', { returnObjects: true })

  const [isOpen, setIsOpen] = useState(false)
  const handleToggleDropdown = () => setIsOpen(!isOpen)
  const handleCloseMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile button */}
      <button
        onClick={handleToggleDropdown}
        className="lg:hidden"
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <MobileMenu
          menuLinks={menuLinks}
          menuLabels={menuLabels}
          closeMenu={handleCloseMenu}
        />
      )}

      {/* Desktop menu */}
      <DesktopMenu menuLinks={menuLinks} menuLabels={menuLabels} />
    </>
  )
}

export default Menu
