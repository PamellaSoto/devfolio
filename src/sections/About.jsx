import { useTranslation } from 'react-i18next'

import { Element } from 'react-scroll'

const About = () => {
  const { t } = useTranslation()
  const about = t('about', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  return (
    <Element name={actionLink[3]} className="py-13 md:flex md:gap-10">
      <div className="w-1/3">
        <img
          className="mt-6 rounded-lg"
          src="/src/assets/cat-lola-1.jpg"
          alt="My cat Lola"
        />
        <p className="mt-4 text-xs italic">{about.cats}</p>
      </div>
      <div className="w-2/3">
        <h2 className="mb-6 text-center md:text-left">
          <span>{about.subtitle}</span>
          {about.title}
        </h2>
        {about.text.map((item, key) => {
          return (
            <p
              className="text-justify"
              key={'about_' + key}
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          )
        })}
      </div>
    </Element>
  )
}

export default About
