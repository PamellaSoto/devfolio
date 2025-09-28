import { useTranslation } from 'react-i18next'

import Menu from './components/Menu.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'

const LandingPage = () => {
  const { t } = useTranslation()
  const menuLinks = t('links', { returnObjects: true })
  return (
    <>
      <header className="bg-new-black/50 sticky top-0 z-2 flex items-center justify-between px-5 py-5 md:py-10 md:px-15 xl:px-50">
        <p className="md:text-xl">pamellasoto.dev</p>
        <Menu />
      </header>
      <main className="flex flex-col gap-15 lg:gap-25 px-5 md:px-15 xl:px-50 pb-15 md:pb-30">
        <Hero id={menuLinks[0]} />
        <ul className="flex flex-wrap justify-center gap-4 border-t-1 border-b-1 my-[-30px] lg:my-[-70px] border-white/30 py-5 md:justify-between md:px-15">
          <li>Backend</li>
          <li>Frontend</li>
          <li>Agile Development</li>
          <li>Figma</li>
          <li>UX/UI Design</li>
          <li>Motion Design</li>
        </ul>
        <Projects id={menuLinks[1]} />
        <Skills id={menuLinks[2]} />
        <About id={menuLinks[3]} />
        <Contact id={menuLinks[4]} />
      </main>
      <footer className="bg-purple px-5 py-4 text-center md:px-15 xl:px-50">
        <p className="text-xs leading-relaxed">{t('footer')}</p>
      </footer>
    </>
  )
}

export default LandingPage
