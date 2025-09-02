import { useTranslation } from 'react-i18next'

import { Element } from 'react-scroll'
import SectionTitle from '../components/SectionTitle'

const Projects = () => {
  const { t } = useTranslation()
  const projects = t('projects', { returnObjects: true })
  const actionLink = t('links', { returnObjects: true })

  return (
    <Element name={actionLink[2]} className="py-20">
      <SectionTitle subtitle={projects.subtitle} title={projects.title} />
      {/* insert filter and pagination */}
    </Element>
  )
}

export default Projects
