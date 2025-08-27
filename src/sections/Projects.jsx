import { useTranslation } from "react-i18next";

import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects", { returnObjects: true });

  <section id={"#" + t("links", { returnObjects: true })[0]} >
        <SectionTitle subtitle={projects.subtitle} title={projects.title} />
        {/* insert filter and pagination */}
  </section>
}

export default Projects