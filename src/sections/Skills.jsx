import { useTranslation } from 'react-i18next'
import { Link, Element } from 'react-scroll'

import { FaCode, FaDatabase, FaAngleDown } from 'react-icons/fa6'
import { VscSymbolColor } from 'react-icons/vsc'
import { IoSettingsSharp } from 'react-icons/io5'

const Skills = () => {
  const { t } = useTranslation()
  const skills = t('skills', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  return (
    <Element
      name={actionLink[1]}
      className="flex flex-col items-center md:items-start gap-6 py-13"
    >
      <div className="md:flex md:justify-between">
        <h2 className="text-center md:text-left">
          <span>{skills.subtitle}</span>
          {skills.title}
        </h2>
        <p
          className="md:w-4/12"
          dangerouslySetInnerHTML={{ __html: skills.text }}
        ></p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="border-purple flex-1 rounded-md border-1 p-4">
          <div className="flex cursor-pointer justify-between">
            <div className="bg-purple inline-block rounded-md p-2">
              <FaCode size={22} />
            </div>
            <div className="flex items-center gap-6">
              <h3 className="uppercase">Frontend</h3>
              <FaAngleDown />
            </div>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            <li>JavaScript, TailwindCSS</li>
            <li>React.JS, React Router, React Hook Form</li>
            <li>{skills.frontendText}</li>
          </ul>
        </div>

        <div className="border-yellow flex-1 rounded-md border-1 p-4">
          <div className="flex cursor-pointer justify-between">
            <div className="bg-yellow inline-block rounded-md p-2">
              <FaDatabase size={22} />
            </div>
            <div className="flex items-center gap-6">
              <h3 className="uppercase">Backend</h3>
              <FaAngleDown />
            </div>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            <li>Java (Spring Boot)</li>
            <li>RESTful APIs</li>
            <li>Node.js</li>
            <li>MySQL, PostgreSQL, Firebase</li>
          </ul>
        </div>

        <div className="border-purple flex-1 rounded-md border-1 p-4">
          <div className="flex cursor-pointer justify-between">
            <div className="bg-purple inline-block rounded-md p-2">
              <VscSymbolColor size={22} />
            </div>
            <div className="flex items-center gap-6">
              <h3 className="uppercase">{skills.design.title}</h3>
              <FaAngleDown />
            </div>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            <li>{skills.design.figma}</li>
            <li>{skills.design.usabilidade}</li>
            <li>Design Systems</li>
          </ul>
        </div>

        <div className="border-yellow flex-1 rounded-md border-1 p-4">
          <div className="flex cursor-pointer justify-between">
            <div className="bg-yellow inline-block rounded-md p-2">
              <IoSettingsSharp size={22} />
            </div>
            <div className="flex items-center gap-6">
              <h3 className="uppercase">{skills.other.title}</h3>
              <FaAngleDown />
            </div>
          </div>
          <ul className="mt-4 flex flex-col gap-3">
            <li>Git & GitHub</li>
            <li>{skills.other.agile}</li>
            <li>{skills.other.office}</li>
            <li>Canva, Photoshop, Illustrator</li>
          </ul>
        </div>
      </div>

      <Link
        className="btn-primary mt-7"
        to={actionLink[4]}
        smooth={true}
        duration={500}
      >
        {skills.button}
      </Link>
    </Element>
  )
}

export default Skills
