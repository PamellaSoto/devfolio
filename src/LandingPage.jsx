import { useTranslation } from "react-i18next";

import Menu from "./components/Menu.jsx";
import Hero from "./sections/Hero.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import About from "./sections/About.jsx";
import Contact from "./sections/Contact.jsx";
import SocialMediaLinks from "./components/SocialMediaLinks.jsx";

const LandingPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="font-bold text-lg">pamellasoto.dev</h1>
        <Menu />
      </header>
      <main className="divide-gray-50/25 divide-y-1">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="flex justify-between">
        {t("footer")}
        <SocialMediaLinks />
      </footer>
    </>
  );
};

export default LandingPage;
