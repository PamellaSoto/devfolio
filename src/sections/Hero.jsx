import { useTranslation } from "react-i18next";
import { IoIosArrowRoundUp } from "react-icons/io";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Hero = () => {
  const { t } = useTranslation();
  const hero = t("hero", { returnObjects: true });

  return (
    <section id={"#" + t("links", { returnObjects: true })[0]} >
      <SectionTitle subtitle={hero.subtitle} title={hero.title} />
      <ul>
        {hero.list.map((item, key) => {
          return <li key={"hero_" + key}>{item}</li>;
        })}
      </ul>
      <Button href={"#" + t("links", { returnObjects: true })[4]} label={hero.contactBtn} />
      <a className="flex items-center" href={"#" + t("links", { returnObjects: true })[2]} >
        {hero.projectBtn} <IoIosArrowRoundUp className="rotate-45" />
      </a>

      <SocialMediaLinks />
    </section>
  );
};

export default Hero;
