const skills = [
  { name: 'HTML & CSS', level: 'Advanced', width: 'w-[92%]' },
  { name: 'JavaScript', level: 'Advanced', width: 'w-[88%]' },
  { name: 'React', level: 'Intermediate', width: 'w-[70%]' },
  { name: 'Tailwind CSS', level: 'Advanced', width: 'w-[90%]' },
  { name: 'Git & GitHub', level: 'Intermediate', width: 'w-[72%]' },
  { name: 'Responsive Design', level: 'Advanced', width: 'w-[94%]' },
]

const barColor = {
  Advanced: 'from-indigo-400 to-cyan-300',
  Intermediate: 'from-sky-400 to-teal-300',
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="shell panel px-6 py-12 sm:px-12 sm:py-16">
        <h2 className="title">My Skills</h2>
        <p className="subtitle">Technologies and tools I work with every day</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-indigo-400/50"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{skill.name}</p>
                <span className="chip">{skill.level}</span>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${barColor[skill.level]} ${skill.width}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
