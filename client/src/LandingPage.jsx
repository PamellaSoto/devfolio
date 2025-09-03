import { useTranslation } from 'react-i18next'
import { Element } from 'react-scroll'

import Menu from './components/Menu.jsx'
import Hero from './sections/Hero.jsx'
import Skills from './sections/Skills.jsx'
// import Projects from './sections/Projects.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import SocialMediaLinks from './components/SocialMediaLinks.jsx'

const LandingPage = () => {
  const { t } = useTranslation()
  const menuLinks = t('links', { returnObjects: true })

  return (
    <>
      <header className="bg-new-black/50 sticky top-0 z-2 flex items-center justify-between px-5 py-5 md:px-15 xl:px-30">
        <p className="mb-0 md:text-xl">pamellasoto.dev</p>
        <Menu />
      </header>
      <main className="divide-y divide-white/10 px-5 md:px-15 xl:px-30 2xl:px-45">
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <About />
        <Element name={menuLinks[4]}>
          <Contact />
        </Element>
      </main>
      <footer className="bg-purple flex flex-col items-center px-5 py-4 md:flex-row-reverse md:items-start md:justify-between md:px-15 xl:px-40">
        <SocialMediaLinks />
        <p className="text-center text-xs leading-relaxed">{t('footer')}</p>
      </footer>
    </>
  )
}

export default LandingPage
