import { useTranslation } from "react-i18next";

import SectionTitle from "../components/SectionTitle";
import IconRounded from "../components/IconRounded";
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const contact = t("contact", { returnObjects: true });

  return (
    <section id={"#" + t("links", { returnObjects: true })[0]}>
      <div>
        <SectionTitle subtitle={contact.subtitle} title={contact.title} />
        <p>{contact.text}</p>
        <div className="flex items-center">
          <IconRounded label={<FaWhatsapp className="text-white" />} />
          <div>
            <h3>
              <a href="#whatsapp">+55 (13) 99168-5115</a>
            </h3>
            <p>WhatsApp</p>
          </div>
        </div>

        <div className="flex items-center">
          <IconRounded label={<FaRegEnvelope className="text-white" />} />
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
            <input type="text" id="name" name="name" placeholder={contact.labels[0]} required />
          </div>
          <div>
            <label for="e_mail">{contact.labels[1]}</label>
            <input type="email" id="e_mail" name="e_mail" placeholder={contact.labels[1]} required />
          </div>
          <div>
            <label for="mensagem">{contact.labels[2]}</label>
            <textarea id="mensagem" name="mensagem" placeholder={contact.labels[2]} required></textarea>
          </div>
          <button type="submit">{contact.button}</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
