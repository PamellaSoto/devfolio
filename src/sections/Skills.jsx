import { useTranslation } from "react-i18next";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Skills = () => {
  const { t } = useTranslation();
  const skills = t("skills", { returnObjects: true });

  return (
    <section id={"#" + t("links", { returnObjects: true })[1]} >
      <div>
        <SectionTitle subtitle={skills.subtitle} title={skills.title} />
        <p dangerouslySetInnerHTML={{ __html: skills.text }}></p>
      </div>
      <div>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>JavaScript, TailwindCSS</li>
            <li>React.JS, React Router, React Hook Form</li>
            <li>{skills.frontendText}</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>Java (Spring Boot)</li>
            <li>RESTful APIs</li>
            <li>Node.js</li>
            <li>MySQL, PostgreSQL, Firebase</li>
          </ul>
        </div>
        <div>
          <h3>{skills.design.title}</h3>
          <ul>
            <li>{skills.design.figma}</li>
            <li>{skills.design.usabilidade}</li>
            <li>Design Systems</li>
          </ul>
        </div>
        <div>
          <h3>{skills.other.title}</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>{skills.other.agile}</li>
            <li>{skills.other.office}</li>
            <li>Canva, Photoshop, Illustrator</li>
          </ul>
        </div>
      </div>
      <Button href={"#" + t("links", { returnObjects: true })[4]} label={skills.button} />
    </section>
  );
};

export default Skills;
