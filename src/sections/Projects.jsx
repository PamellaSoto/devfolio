import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'

const Projects = ({ id }) => {
  const { t } = useTranslation()
  const projects = t('projects', { returnObjects: true })
  const projectsData = t('projects.list', { returnObjects: true })

  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => setSelectedProject(project)
  const handleCloseModal = () => setSelectedProject(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedProject])

  return (
    <section id={id} className="flex flex-col gap-6 lg:gap-10">
      <div className="flex-space-between">
        <h2>{projects.title}</h2>
        <p className="small-text text-center">{projects.lastUpdated} 28/09/2025</p>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-3 md:gap-y-10">
        {projectsData.map((proj) => (
          <div
            key={proj.name}
            className="flex cursor-pointer flex-col gap-2"
            onClick={() => handleOpenModal(proj)}
          >
            <img
              src={proj.thumbnail}
              className="rounded-md h-[220px] object-cover object-top max-w-full"
              alt={proj.name}
            />
            <div className="flex-space-between">
              <h3 className="h3-projects">{proj.name}</h3>
              <span className="text-sm text-white/75">{proj.year}</span>
            </div>
          </div>
        ))}
      </div>

      <a
        className="btn-primary w-full md:w-fit md:self-center"
        href="https://github.com/PamellaSoto?tab=repositories"
        target="_blank"
        aria-label="Go to Github"
      >
        {projects.button}
      </a>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={handleCloseModal}
        >
          <div
            className="bg-new-black custom-scroll m-5 flex max-h-[85vh] w-full max-w-5/12 flex-col gap-3 overflow-y-auto rounded-lg p-6 md:m-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.thumbnail}
              className="rounded-md h-[300px] object-cover object-top max-w-full"
              alt={selectedProject.name}
            />
            <div className="mt-3 flex items-center justify-between">
              <h4 className="text-xl font-bold md:text-3xl">
                {selectedProject.name}
              </h4>
              <p className="small-text">{selectedProject.year}</p>
            </div>
            {selectedProject.description.map((item, key) => {
              return (
                <p
                  className="mb-3"
                  key={'about_' + key}
                  dangerouslySetInnerHTML={{ __html: item }}
                ></p>
              )
            })}
            <p>
              <b>Stack:</b> {selectedProject.stack.join(', ')}
            </p>
            <div className="mt-3 flex justify-center">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 text-base"
              >
                {selectedProject.buttons[0]}
              </a>
              <button
                onClick={handleCloseModal}
                className="btn-secondary flex-0"
              >
                {selectedProject.buttons[1]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
