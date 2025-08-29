import { useTranslation } from 'react-i18next'

import { Element } from 'react-scroll'

const About = () => {
  const { t } = useTranslation()
  const about = t('about', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  return (
    <Element name={actionLink[3]} className="py-20 md:flex md:gap-15">
      <div className="md:w-1/3">
        <img
          className="hidden rounded-lg md:block"
          src="/src/assets/cat-lola-1.jpg"
          alt="My cat Lola"
        />
        <p className="mt-4 hidden text-xs leading-relaxed italic md:block">
          {about.cats}
        </p>
      </div>
      <div className="md:w-2/3">
        <h2 className="mb-6 text-center md:text-left">
          <span>{about.subtitle}</span>
          {about.title}
        </h2>
        {about.text.map((item, key) => {
          return (
            <p
              className="mb-4"
              key={'about_' + key}
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          )
        })}
        <img
          className="mt-6 rounded-lg md:hidden"
          src="/src/assets/cat-lola-1.jpg"
          alt="My cat Lola"
        />
        <p className="mt-4 text-xs leading-relaxed italic md:hidden">
          {about.cats}
        </p>
      </div>
    </Element>
  )
}

export default About
