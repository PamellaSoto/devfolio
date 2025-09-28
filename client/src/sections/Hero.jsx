import { useTranslation } from 'react-i18next'

import myPhoto from '../assets/pamella-soto.png'

import { TbBrandGithubFilled } from 'react-icons/tb'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

const Hero = ({ id }) => {
  const { t } = useTranslation()
  const hero = t('hero', { returnObjects: true })

  return (
    <section
      id={id}
      className="flex flex-col-reverse items-center md:flex-row md:justify-between md:gap-30"
    >
      <div className="flex flex-col md:w-3/5 lg:w-full">
        <h1 className="text-center text-[1.5em] md:text-left md:text-3xl">
          {hero.subtitle}
          <br />
          <span className="text-purple text-3xl md:text-4xl lg:text-5xl">
            {hero.title}
          </span>
        </h1>

        <p className='mt-2' dangerouslySetInnerHTML={{ __html: hero.text }}></p>

        <div className="flex flex-col gap-6 items-center md:flex-row mt-6 lg:mt-10">
          <a
            className="btn-primary w-full md:w-fit md:self-start"
            href="https://drive.google.com/drive/folders/1Ucbikn6F80XXt8umzWzRJQFPBBYXw09x?usp=drive_link"
            target="_blank"
            aria-label="See CV folder on Google Drive"
          >
            {hero.resumeDownloadBtn}
          </a>
          <div className="flex gap-10">
            <a
              href="https://github.com/PamellaSoto"
              target="_blank"
              aria-label="Go to Github"
            >
              <TbBrandGithubFilled size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/web-pamella-lopes/"
              target="_blank"
              aria-label="Go to Linkedin"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:pamellasoto.dev@gmail.com"
              aria-label="Send an email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      <img
        src={myPhoto}
        className="self-center w-10/12 mb-5 md:w-5/12 lg:w-4/12"
        alt="A photo of Pamella Sotomayor"
      />
    </section>
  )
}

export default Hero
