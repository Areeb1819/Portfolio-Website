const projects = [
  {
    title: 'Real Estate Listings',
    description:
      'A home listing website where users browse available properties. Each listing shows the photos, price, location and key details of the home, arranged in a clean responsive grid that works well on both mobile and desktop.',
    tags: ['HTML', 'CSS', 'Responsive Layout'],
    live: 'https://example.com',
    code: 'https://github.com/Areeb1819',
  },
  {
    title: 'IntraDOS Clone',
    description:
      'A clone of the classic IntraDOS file manager, rebuilt from scratch. It includes file and folder browsing, directory navigation, a selection bar and a details view, styled to match the original retro interface.',
    tags: ['HTML', 'CSS', 'UI Recreation'],
    live: 'https://example.com',
    code: 'https://github.com/Areeb1819',
  },
  {
    title: 'Developer Portfolio',
    description:
      'This website. A single page portfolio built with React and Tailwind CSS, featuring a scroll driven animated background, responsive navigation, project cards and a contact form that connects straight to WhatsApp.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    live: 'https://example.com',
    code: 'https://github.com/Areeb1819',
  },
]

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell panel px-6 py-12 sm:px-12 sm:py-16">
        <h2 className="title">My Projects</h2>
        <p className="subtitle">Some of the work I have built so far</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-white/[0.06]"
            >
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Website
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  Source Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
