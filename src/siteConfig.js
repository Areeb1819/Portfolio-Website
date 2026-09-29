/* All personal info lives here so you only ever edit this one file. */

export const profile = {
  name: 'Areeb Saleem',
  firstName: 'Areeb',
  role: 'Frontend Developer',
  tagline:
    'I build clean, modern and responsive websites using HTML, CSS, JavaScript and React.',
  email: 'bscsstudent35@gmail.com',
  location: 'Pakistan',
  /* Country code included. Spaces and the + sign are stripped automatically. */
  whatsapp: '+923114486681',
}

export const emailSubject = 'New message from your portfolio'

/* ---------- Email ---------- */

/* Opens a full compose window in the browser, exactly like the WhatsApp
   button does. The visitor types their message there and hits send, and it
   lands in your inbox. This needs no backend and no API key.

   It uses the visitor's own Gmail account, so the "from" address is theirs. */
export const gmailComposeLink = ({ to, subject, body } = {}) => {
  const params = new URLSearchParams()
  if (to) params.set('to', to)
  if (subject) params.set('su', subject)
  if (body) params.set('body', body)
  return `https://mail.google.com/mail/?view=cm&fs=1&${params.toString()}`
}

/* The classic mailto link, kept as a backup for people not on Gmail.
   It only works if a mail app is set as the default handler. */
export const mailtoLink = `mailto:${profile.email}`

/* Builds the message body used by both the Gmail and the WhatsApp buttons. */
export const buildMessage = ({ name = '', email = '', message = '' } = {}) =>
  [
    `Hello ${profile.name}, I found your portfolio.`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n')

/* ---------- WhatsApp ---------- */

/* Removes the + and any spaces so wa.me gets a clean number. */
export const whatsappLink = (message = '') => {
  const number = profile.whatsapp.replace(/[^\d]/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email)
    return true
  } catch {
    return false
  }
}

/* ---------- Social ---------- */

export const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/Areeb1819',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/areeb-saleem-521739323',
    icon: 'linkedin',
  },
  { name: 'Email', url: mailtoLink, icon: 'email', isEmail: true },
]
