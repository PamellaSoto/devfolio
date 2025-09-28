import { useTranslation } from 'react-i18next'
import { useState } from 'react'

const Projects = ({ id }) => {
  const { t } = useTranslation()
  const projects = t('projects', { returnObjects: true })
  const projectsData = t('projects.list', { returnObjects: true })

  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (project) => setSelectedProject(project)
  const handleCloseModal = () => setSelectedProject(null)

  return (
    <section id={id} className="flex flex-col gap-6 lg:gap-10">
      <div className="flex-space-between">
        <h2>{projects.title}</h2>
        <p className="small-text text-center">Latest updated: 28/09/2025</p>
      </div>

      <div className="grid grid-cols-1 gap-x-7 gap-y-5 md:grid-cols-3 md:gap-y-10">
        {projectsData.map((proj) => (
          <div
            key={proj.name}
            className="flex cursor-pointer flex-col gap-2"
            onClick={() => handleOpenModal(proj)}
          >
            <img
              src="https://placehold.co/300x180/EEE/31343C"
              className="rounded-md"
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
            className="bg-new-black m-5 w-full max-w-lg rounded-lg p-6 md:m-10 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="https://placehold.co/800x500/EEE/31343C"
              className="rounded-md"
              alt={selectedProject.name}
            />
            <div className="flex items-center justify-between mt-3">
              <h4 className="text-xl font-bold md:text-3xl">
                {selectedProject.name}
              </h4>
              <p className="small-text">{selectedProject.year}</p>
            </div>
            <p>{selectedProject.description}</p>
            <p>
              <b>Stack:</b> {selectedProject.stack.join(', ')}
            </p>
            <div className='flex justify-center mt-3'>
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
