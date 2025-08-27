import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageSelector from "./LanguageSelector";

import { HiBars3, HiXMark } from "react-icons/hi2";

const Menu = () => {
  const { t } = useTranslation();
  const menu = t("menu", { returnObjects: true });
  const menuLinks = t("links", { returnObjects: true });

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <button onClick={toggleDropdown}>
        {isOpen ? <HiXMark size={22} /> : <HiBars3 size={22}/>}
      </button>
      {isOpen && 
        <nav className="absolute top-10 right-0 bg-[#131213] p-5 rounded-xl min-w-60 transition-all">
          <ul>
            <li className="pb-3 border-b-1 mb-3">
              <LanguageSelector />
            </li>
            <li className="p-3 hover:bg-yellow-400 rounded-xl">
              <a href={"#" + menuLinks[0]}>{menu.home}</a>
            </li>
            <li className="p-3 hover:bg-yellow-400 rounded-xl">
              <a href={"#" + menuLinks[1]}>{menu.skills}</a>
            </li>
            <li className="p-3 hover:bg-yellow-400 rounded-xl">
              <a href={"#" + menuLinks[2]}>{menu.projects}</a>
            </li>
            <li className="p-3 hover:bg-yellow-400 rounded-xl">
              <a href={"#" + menuLinks[3]}>{menu.about}</a>
            </li>
            <li className="p-3 hover:bg-yellow-400 rounded-xl">
              <a href={"#" + menuLinks[4]}>{menu.contact}</a>
            </li>
            <li className="p-3 bg-yellow-400 rounded-xl">
              <a href="#LINK">{menu.resume}</a>
            </li>
          </ul>
        </nav>
      }
    </>
  );
};

export default Menu;
