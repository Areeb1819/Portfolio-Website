const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '3', label: 'Projects Built' },
  { value: '100%', label: 'Dedication' },
]

function About() {
  return (
    <section id="about" className="section">
      <div className="shell panel px-6 py-12 sm:px-12 sm:py-16">
        <h2 className="title">About Me</h2>
        <p className="subtitle">
          I build responsive, modern and accessible websites that look great on
          every screen.
        </p>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-sm leading-8 text-zinc-400 sm:text-base">
          <p>
            My journey in frontend development started with plain HTML and CSS,
            and today I build complete interfaces with React and Tailwind CSS. I
            like keeping the code simple and the design tidy — no unnecessary
            libraries, no over-engineering.
          </p>
          <p>
            In every project I focus on three things: performance, accessibility
            and clean code. That means fast load times, keyboard friendly
            controls, readable markup and a layout that behaves properly on
            phones, tablets and desktops alike.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition hover:border-indigo-400/50"
            >
              <p className="text-3xl font-bold text-indigo-300">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
