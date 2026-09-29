import photo from '../assets/myphoto.jpeg'
import { profile, socials } from '../siteConfig'

function Hero() {
  const github = socials.find((s) => s.icon === 'github')
  const linkedin = socials.find((s) => s.icon === 'linkedin')

  return (
    <section
      id="home"
      className="section flex min-h-[calc(100vh-5rem)] flex-col justify-center"
    >
      <div className="shell flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <h2 className="mt-4 text-lg font-medium text-zinc-300 sm:text-2xl">
            Frontend Developer building{' '}
            <span className="text-white">modern, responsive</span> web apps
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base lg:mx-0">
            {profile.tagline} I care about clean code, fast pages and interfaces
            that feel effortless to use.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-indigo-500/20 blur-3xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-b from-white/15 to-white/5 p-1.5">
            <img
              src={photo}
              alt={profile.name}
              width={1086}
              height={1448}
              className="h-72 w-60 rounded-[1.6rem] object-cover shadow-2xl shadow-black/60 sm:h-96 sm:w-72"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-xs tracking-[0.3em] text-zinc-600 uppercase transition hover:text-zinc-300 sm:block"
      >
        Scroll
      </a>
    </section>
  )
}

export default Hero
