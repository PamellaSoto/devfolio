import { useTranslation } from "react-i18next";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const About = () => {
  const { t } = useTranslation();
  const about = t("about", { returnObjects: true });

  return (
    <section id={"#" + t("links", { returnObjects: true })[0]}>
      <div>
        <img src="" alt="" />
        <p>{about.cats}</p>
      </div>
      <div>
        <SectionTitle subtitle={about.subtitle} title={about.title} />
        {about.text.map((item, key) => {
          return <p key={"about_" + key} dangerouslySetInnerHTML={{ __html: item}}></p>;
        })}
      </div>
    </section>
  );
};

export default About;
