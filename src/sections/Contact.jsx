import { useTranslation } from 'react-i18next'

import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaRegEnvelope,
  FaExternalLinkAlt,
} from 'react-icons/fa'

const Contact = ({ id }) => {
  const { t } = useTranslation()
  const contact = t('contact', { returnObjects: true })

  return (
    <section id={id}>
      <h2>{contact.title}</h2>
      <p className='mb-6 md:mb-10'>{contact.text}</p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Linkedin */}
        <a
          href="https://www.linkedin.com/in/web-pamella-lopes/"
          target="_blank"
          className="flex items-center justify-between rounded-md border-1 border-white/50 py-4 px-6"
        >
          <div className="flex items-center gap-3">
            <FaLinkedin size={18} />
            <h3>Linkedin</h3>
          </div>
          <FaExternalLinkAlt size={14} />
        </a>
        {/* Instagram */}
        <a
          href="https://www.instagram.com/pamella.soto/"
          target="_blank"
          className="flex items-center justify-between rounded-md border-1 border-white/50 py-4 px-6"
        >
          <div className="flex items-center gap-3">
            <FaInstagram size={18} />
            <h3>Instagram</h3>
          </div>
          <FaExternalLinkAlt size={14} />
        </a>
        {/* Github */}
        <a
          href="https://github.com/PamellaSoto"
          target="_blank"
          className="flex items-center justify-between rounded-md border-1 border-white/50 py-4 px-6"
        >
          <div className="flex items-center gap-3">
            <FaGithub size={18} />
            <h3>Github</h3>
          </div>
          <FaExternalLinkAlt size={14} />
        </a>
        {/* Email */}
        <a
          href="mailto:pamellasoto.dev@gmail.com"
          target="_blank"
          className="flex items-center justify-between rounded-md border-1 border-white/50 py-4 px-6"
        >
          <div className="flex items-center gap-3">
            <FaRegEnvelope size={18} />
            <h3>E-mail</h3>
          </div>
          <FaExternalLinkAlt size={14} />
        </a>
      </div>
    </section>
  )
}

export default Contact
