# Developer Portfolio

A personal developer portfolio website built with React and Tailwind CSS.

**Live site:** [your-site-url.com](https://your-site-url.com)

## What is inside

- **Hero** — name, role, short intro and links to GitHub and LinkedIn
- **About** — short bio plus a few quick stats
- **Skills** — progress bars for the tools used every day
- **Projects** — three projects, each with a live link and a source code link
- **Contact** — a form that can send the message over WhatsApp or email
- **Background** — an animated parallax background that responds to scroll

## Built with

- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- [Vite](https://vite.dev) 8
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

No backend, no database and no third party API. Everything runs in the browser.

## Getting started

```bash
npm install
npm run dev
```

The site opens on `http://localhost:5173`.

## Available scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Builds the site for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs Oxlint over the source |

## Editing your details

Everything personal lives in one file: **`src/siteConfig.js`**

Change the name, role, email, WhatsApp number, location and social links there
and the whole site updates. The WhatsApp number should be digits only, with
the country code and no `+` or spaces.

## Adding background images

Drop images into **`src/assets/backgrounds/`** and they appear automatically —
no imports, no code changes. Name them with a leading number to control the
stacking order:

| File | Position |
| --- | --- |
| `1-code.jpg` | Furthest back, fastest scroll |
| `2-city.jpg` | Middle, medium scroll |
| `3-glow.jpg` | On top, slowest scroll |

Each layer drifts at a different speed as you scroll, which produces the
parallax effect. Landscape images work best, roughly 1600px wide, and keeping
each file under 500 KB keeps the page fast.

## Project structure

```
src/
├── assets/
│   ├── myphoto.jpeg
│   └── backgrounds/     # drop background images here
├── components/
│   ├── Background.jsx   # animated parallax background
│   ├── EmailLink.jsx    # email button with Gmail and mailto fallbacks
│   ├── Footer.jsx
│   └── Navbar.jsx
├── pages/
│   └── Home.jsx         # assembles all the sections
├── sections/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   └── Skills.jsx
├── index.css
├── siteConfig.js        # your personal details live here
├── App.jsx
└── main.jsx
```

## Notes on the contact form

The form does not need a server. The **Send on WhatsApp** button opens WhatsApp
with the message already typed out, and the **Send Email** button opens a Gmail
compose window with the name, email and message filled in. Both hand the
message to the visitor's own app, so nothing is stored anywhere.

The dropdown arrow next to each email button offers three fallbacks: open the
default mail app, compose in Gmail, or copy the email address to the clipboard.

## License

© Areeb Saleem. All rights reserved.
