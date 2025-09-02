import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { Element } from 'react-scroll'
import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'

const Contact = () => {
  const { t } = useTranslation()
  const contact = t('contact', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  const [status, setStatus] = useState({ state: "idle", msg: "" })
  async function handleSubmit(e) {
    e.preventDefault();  
    setStatus({state: "loading", msg: contact.formSending});

    const form = e.currentTarget
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
      _honey: form._honey.value,
    }

    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (data.ok) {
        setStatus({ state: 'success', msg: contact.formSuccess})
        form.reset()
      } else {
        setStatus({ state: 'error', msg: data.error || contact.formError })
      }
    } catch (err) {
      setStatus({ state: 'error', msg: `Error code: ${err}` })
    }
  }

  return (
    <Element name={actionLink[4]} className="py-20 lg:flex lg:gap-10">
      <div className="lg:flex-1">
        <h2 className="mb-6 text-center md:text-left">
          <span>{contact.subtitle}</span>
          {contact.title}
        </h2>
        <p>{contact.text}</p>
        <div className="mt-6 flex items-center">
          <div className="bg-purple mr-4 inline-block rounded-full p-2">
            <FaWhatsapp size={25} />
          </div>
          <div>
            <h3>
              <a
                className="text-yellow text-xl font-bold md:text-3xl"
                href="#whatsapp"
              >
                +55 (13) 99168-5115
              </a>
            </h3>
            <p className="m-0">WhatsApp</p>
          </div>
        </div>

        <div className="mt-4 flex items-center">
          <div className="bg-purple mr-4 inline-block rounded-full p-2">
            <FaRegEnvelope size={22} />
          </div>
          <div>
            <h3>
              <a
                className="text-yellow text-xl font-bold md:text-3xl"
                href="mailto:pamellasoto.dev@gmail.com"
              >
                pamellasoto.dev@gmail.com
              </a>
            </h3>
            <p className="m-0">E-mail</p>
          </div>
        </div>
      </div>

      <div className="lg:flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
          <div className="sr-only">
            <label htmlFor="_honey">Não preencher</label>
            <input id="_honey" name="_honey" tabIndex="-1" autoComplete="off" />
          </div>

          <div>
            <label className="mb-2 block" htmlFor="name">
              {contact.labels[0]}
            </label>
            <input
              className="focus:outline-yellow w-full rounded-xl border-1 border-white/25 px-4 py-3 hover:border-white"
              type="text"
              id="name"
              name="name"
              placeholder={contact.labels[0]}
              required
            />
          </div>

          <div>
            <label className="mb-2 block" htmlFor="email">
              {contact.labels[1]}
            </label>
            <input
              className="focus:outline-yellow w-full rounded-xl border-1 border-white/25 px-4 py-3 hover:border-white"
              type="email"
              id="email"
              name="email"
              placeholder={contact.labels[1]}
              required
            />
          </div>

          <div>
            <label className="mb-2 block" htmlFor="message">
              {contact.labels[2]}
            </label>
            <textarea
              className="focus:outline-yellow w-full rounded-xl border-1 border-white/25 px-4 py-3 hover:border-white"
              id="message"
              name="message"
              rows={8}
              placeholder={contact.labels[2]}
              required
            ></textarea>
          </div>

          <button className="btn-primary block w-full" type="submit">
            {contact.button}
          </button>

          {status.state !== 'idle' && (
            <p
              className={`text-sm mt-2 ${
                status.state === 'error'
                  ? 'text-red-400'
                  : status.state === 'success'
                  ? 'text-green-400'
                  : 'text-yellow-400'
              }`}
            >
              {status.msg}
            </p>
          )}
        </form>
      </div>
    </Element>
  )
}

export default Contact