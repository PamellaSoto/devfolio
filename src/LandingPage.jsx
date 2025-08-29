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
      <header className="sticky flex items-center justify-between px-5 pt-5 md:px-15 lg:px-35">
        <p className="mb-0 md:text-xl">pamellasoto.dev</p>
        <Menu />
      </header>
      <main className="divide-y divide-white/10 px-5 md:px-15 lg:px-70">
        <Hero />
        <Skills />
        {/* <Projects /> */}
        <About />
        <Element name={menuLinks[4]}>
          <Contact />
        </Element>
      </main>
      <footer className="bg-purple flex flex-col items-center md:flex-row-reverse md:justify-between md:items-start py-4 px-5 md:px-15 lg:px-35">
        <SocialMediaLinks />
        <p className='text-xs leading-relaxed text-center'>{t('footer')}</p>
      </footer>
    </>
  )
}

export default LandingPage
