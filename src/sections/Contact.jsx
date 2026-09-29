import { useState } from 'react'
import {
  buildMessage,
  emailSubject,
  gmailComposeLink,
  profile,
  socials,
  whatsappLink,
} from '../siteConfig'
import EmailLink from '../components/EmailLink'

const inputClass =
  'w-full rounded-xl border border-white/10 bg-zinc-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-indigo-400 focus:bg-zinc-950/70'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const message = buildMessage(form)

  const handleWhatsApp = (event) => {
    event.preventDefault()
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setForm({ name: '', email: '', message: '' })
  }

  const handleEmail = (event) => {
    event.preventDefault()
    window.open(
      gmailComposeLink({
        to: profile.email,
        subject: `${emailSubject} — ${form.name || 'New visitor'}`,
        body: message,
      }),
      '_blank',
      'noopener,noreferrer',
    )
    setForm({ name: '', email: '', message: '' })
  }

  const details = [
    { label: 'Location', value: profile.location },
    { label: 'Availability', value: 'Open to new work' },
  ]

  return (
    <section id="contact" className="section">
      <div className="shell panel px-6 py-12 sm:px-12 sm:py-16">
        <h2 className="title">Get In Touch</h2>
        <p className="subtitle">
          Fill in the form, then pick how you want to reach me. Both options open
          a ready-to-send window in your browser.
        </p>

        <form className="mx-auto mt-10 flex max-w-xl flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />

          <div className="mt-2 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="submit" onClick={handleEmail} className="btn btn-primary">
              Send Email
            </button>
            <button
              type="submit"
              onClick={handleWhatsApp}
              className="btn btn-ghost"
            >
              Send on WhatsApp
            </button>
          </div>
        </form>

        <div className="mt-12">
          <h3 className="text-center text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Or reach me directly
          </h3>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {socials
              .filter((social) => !social.isEmail)
              .map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  {social.name}
                </a>
              ))}

            <a
              href={whatsappLink(`Hello ${profile.name}, I found your portfolio.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              WhatsApp
            </a>

            <EmailLink className="btn btn-ghost" />
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-indigo-300">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
