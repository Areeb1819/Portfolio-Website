import { useEffect, useRef, useState } from 'react'
import {
  buildMessage,
  copyEmail,
  emailSubject,
  gmailComposeLink,
  mailtoLink,
  profile,
} from '../siteConfig'

/* Opens a ready-to-write email compose window in the browser, the same way the
   WhatsApp button opens WhatsApp. The visitor types their message there and
   sends it, and it arrives in your inbox.
 *
   A plain mailto link cannot do this reliably — it only works when the visitor
   has a mail app set as the default handler, and on most machines it silently
   does nothing. */

export default function EmailLink({
  className = '',
  children = 'Send Email',
  onClick,
  ...rest
}) {
  const [showOptions, setShowOptions] = useState(false)
  const [copied, setCopied] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!showOptions) return

    const onDocClick = (event) => {
      if (!rootRef.current?.contains(event.target)) setShowOptions(false)
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setShowOptions(false)
    }

    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [showOptions])

  const handleCopy = async () => {
    const ok = await copyEmail()
    setCopied(ok)
    if (ok) setTimeout(() => setCopied(false), 2500)
  }

  return (
    <span ref={rootRef} className="relative inline-flex">
      <a
        href={gmailComposeLink({
          to: profile.email,
          subject: emailSubject,
          body: buildMessage(),
        })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
        {...rest}
      >
        {children}
      </a>

      <button
        type="button"
        onClick={() => setShowOptions((value) => !value)}
        aria-label="More email options"
        title="More email options"
        className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition hover:border-indigo-400/60 hover:text-white"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {showOptions && (
        <div className="absolute top-full right-0 z-50 mt-2 w-56 overflow-hidden rounded-xl border border-white/15 bg-zinc-900 text-left shadow-2xl shadow-black/60">
          <a
            href={mailtoLink}
            className="block px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            Open my mail app
          </a>
          <a
            href={gmailComposeLink({
              to: profile.email,
              subject: emailSubject,
              body: buildMessage(),
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            Compose in Gmail
          </a>
          <button
            type="button"
            onClick={handleCopy}
            className="block w-full px-4 py-3 text-left text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
          >
            {copied ? 'Email copied' : 'Copy my email address'}
          </button>
        </div>
      )}
    </span>
  )
}
