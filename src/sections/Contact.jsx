import { useTranslation } from 'react-i18next'

import { Element } from 'react-scroll'
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

const Contact = () => {
  const { t } = useTranslation()
  const contact = t('contact', { returnObjects: true })

  return (
    <Element className="py-13">
      <div>
        <h2 className="mb-6 text-center md:text-left">
          <span>{contact.subtitle}</span>
          {contact.title}
        </h2>
        <p>{contact.text}</p>
        <div>
          <div>
            <FaWhatsapp size={25} />
          </div>
          <div>
            <h3>
              <a href="#whatsapp">+55 (13) 99168-5115</a>
            </h3>
            <p>WhatsApp</p>
          </div>
        </div>

        <div>
          <div>
            <FaRegEnvelope size={25} />
          </div>
          <div>
            <h3>
              <a href="mailto:pamellasoto.dev@gmail.com">
                pamellasoto.dev@gmail.com
              </a>
            </h3>
            <p>E-mail</p>
          </div>
        </div>
      </div>
      <div>
        <form>
          <div>
            <label for="name">{contact.labels[0]}</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={contact.labels[0]}
              required
            />
          </div>
          <div>
            <label for="e_mail">{contact.labels[1]}</label>
            <input
              type="email"
              id="e_mail"
              name="e_mail"
              placeholder={contact.labels[1]}
              required
            />
          </div>
          <div>
            <label for="mensagem">{contact.labels[2]}</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={8}
              placeholder={contact.labels[2]}
              required
            ></textarea>
          </div>
          <button type="submit">{contact.button}</button>
        </form>
      </div>
    </Element>
  )
}

export default Contact
