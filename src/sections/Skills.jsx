import { useTranslation } from 'react-i18next'
import { Link, Element } from 'react-scroll'

import { FaCode, FaDatabase } from 'react-icons/fa6'
import { IoColorPalette } from 'react-icons/io5'
import { IoSettingsSharp } from 'react-icons/io5'

const Skills = () => {
  const { t } = useTranslation()
  const skills = t('skills', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  return (
    <Element
      name={actionLink[1]}
      className="flex flex-col items-center gap-6 py-20 md:items-start"
    >
      <div className="md:flex md:justify-between">
        <h2 className="text-center md:text-left">
          <span>{skills.subtitle}</span>
          {skills.title}
        </h2>
        <p
          className="md:w-6/12"
          dangerouslySetInnerHTML={{ __html: skills.text }}
        ></p>
      </div>

      <div className="mt-10 flex flex-col gap-20 md:flex-row md:gap-6">
        <div className="bg-purple/15 border-purple/30 relative flex-1 rounded-md border-2 px-6 pb-6">
          <div className="bg-purple absolute top-[-30px] inline-block rounded-full p-4">
            <FaCode size={32} />
          </div>
          <div className="flex cursor-pointer justify-between">
            <div className="flex items-center gap-6">
              <h3 className="mt-15 uppercase">Frontend</h3>
            </div>
          </div>
          <ul>
            <li>JavaScript, TailwindCSS</li>
            <li>ReactJS, React Router, React Hook Form</li>
            <li>{skills.frontendText}</li>
            <li>{skills.frontendText2}</li>
          </ul>
        </div>

        <div className="bg-purple/15 border-purple/30 relative flex-1 rounded-md border-2 px-6 pb-6">
          <div className="bg-purple absolute top-[-30px] inline-block rounded-full p-4">
            <FaDatabase size={32} />
          </div>
          <div className="flex cursor-pointer justify-between">
            <div className="flex items-center gap-6">
              <h3 className="mt-15 uppercase">Backend</h3>
            </div>
          </div>
          <ul>
            <li>Java (Spring Boot)</li>
            <li>REST API</li>
            <li>Node.js</li>
            <li>MySQL, PostgreSQL, Firebase</li>
            <li>{skills.backendText}</li>
          </ul>
        </div>

        <div className="bg-purple/15 border-purple/30 relative flex-1 rounded-md border-2 px-6 pb-6">
          <div className="bg-purple absolute top-[-30px] inline-block rounded-full p-4">
            <IoColorPalette size={32} />
          </div>
          <div className="flex cursor-pointer justify-between">
            <div className="flex items-center gap-6">
              <h3 className="mt-15 uppercase">{skills.design.title}</h3>
            </div>
          </div>
          <ul>
            <li>{skills.design.figma}</li>
            <li>Wireframe</li>
            <li>{skills.design.usabilidade}</li>
            <li>Design Systems</li>
          </ul>
        </div>

        <div className="bg-purple/15 border-purple/30 relative flex-1 rounded-md border-2 px-6 pb-6">
          <div className="bg-purple absolute top-[-30px] inline-block rounded-full p-4">
            <IoSettingsSharp size={32} />
          </div>
          <div className="flex cursor-pointer justify-between">
            <div className="flex items-center gap-6">
              <h3 className="mt-15 uppercase">{skills.other.title}</h3>
            </div>
          </div>
          <ul>
            <li>Git & GitHub</li>
            <li>Wordpress</li>
            <li>{skills.other.agile}</li>
            <li>{skills.other.office}</li>
            <li>Canva, Photoshop, Illustrator</li>
          </ul>
        </div>
      </div>

      <Link
        className="btn-primary mt-4"
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
