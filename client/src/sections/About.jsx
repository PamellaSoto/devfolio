import { useTranslation } from 'react-i18next'

import CatPhoto from '../assets/cat-lola.jpg'

const About = ({ id }) => {
  const { t } = useTranslation()
  const about = t('about', { returnObjects: true })

  return (
    <section id={id} className="bg-purple/10 rounded-md p-5 flex-col-reverse flex md:flex-row gap-6 md:gap-15 md:p-10">
      <img className="rounded-md" src={CatPhoto} alt="My cat Lola" />
      <div>
        <h2 className='mb-6'>
          <span>{about.subtitle}</span>
          {about.title}
        </h2>
        {about.text.map((item, key) => {
          return (
            <p
              className="mb-3"
              key={'about_' + key}
              dangerouslySetInnerHTML={{ __html: item }}
            ></p>
          )
        })}
      </div>
    </section>
  )
}

export default About
