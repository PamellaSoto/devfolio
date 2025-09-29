import { useTranslation } from 'react-i18next'

const Skills = ({ id }) => {
  const { t } = useTranslation()
  const skills = t('skills', { returnObjects: true })

  return (
    <section id={id} className="flex flex-col md:justify-between gap-6 lg:gap-10">
      <h2>{skills.title}</h2>
      <p className="md:mt-[-20px]" dangerouslySetInnerHTML={{ __html: skills.text }}></p>
      <div className="flex flex-col md:flex-row md:justify-between gap-6 md:gap-10">
        {/* Frontend */}
        <div>
          <h3 className="uppercase mb-3 md:mb-6">Frontend</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
            <li>JavaScript (ES6+)</li>
            <li>TailwindCSS</li>
            <li>ReactJS</li>
            <li>HTML5, CSS3</li>
            <li>RadixUI</li>
            <li>{skills.frontend}</li>
          </ul>
        </div>
        {/* Backend */}
        <div>
          <h3 className="uppercase mb-3 md:mb-6">Backend</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>Node.js</li>
            <li>MySQL, PostgreSQL</li>
            <li>Modelagem de Dados</li>
            <li>MongoDB, Firebase</li>
          </ul>
        </div>
        {/* Web Design */}
        <div>
          <h3 className="uppercase mb-3 md:mb-6">Web Design</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
            <li>Figma</li>
            <li>Wireframe e Protótipos</li>
            <li>Design Systems</li>
            <li>WordPress</li>
            <li>Illustrator, Canva</li>
            <li>Design Systems</li>
          </ul>
        </div>
        {/* Other */}
        <div>
          <h3 className="uppercase mb-3 md:mb-6">{skills.other.title}</h3>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col">
            <li>Git & GitHub</li>
            <li>Lighthouse, DevTools</li>
            <li>{skills.other.problem}</li>
            <li>Deployment e Hosting</li>
            <li>Scrum e Kanban</li>
            <li>{skills.other.office}</li>
          </ul>
        </div>
      </div>

      <a
        className="btn-primary w-full md:w-fit"
        href="https://github.com/PamellaSoto?tab=repositories"
        target="_blank"
      >
        {skills.button}
      </a>
    </section>
  )
}

export default Skills
