# Emmanuel Nwosu — Portfolio

A real React app (Vite + React + Tailwind CSS), built from the original single-page
HTML portfolio. Organized into components so it's easy to edit and extend.

## Project structure

```
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── assets/            # put your CV PDF here (see README.txt inside)
└── src/
    ├── main.jsx           # React entry point
    ├── App.jsx            # composes all sections
    ├── index.css          # Tailwind + global styles
    ├── data/
    │   └── content.js      # ALL editable content lives here: nav links,
    │                        # projects, skills, timeline, contact info, etc.
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── About.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Reveal.jsx      # scroll-reveal animation wrapper
        └── ui.jsx          # shared bits: LinkButton, SkillBadge, SkillBar, etc.
```

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build       # production build -> dist/
npm run preview     # preview the production build locally
```

## Editing content

Almost everything you'd want to change — project cards, skill percentages,
availability badges, contact links — lives in `src/data/content.js`. You
usually won't need to touch the component files at all.

## Known placeholders to replace

- `FEATURED_PROJECTS` in `content.js`: the "Scalable Authentication Service"
  and "CI/CD & Infrastructure Automation" cards still have placeholder `#`
  links (shown as disabled "not available yet" buttons). Add real URLs when
  you have them.
- `Billway`, `Bitmonie`, and `Xaddie` project titles/descriptions in
  `OTHER_PROJECTS` were inferred from their URLs — update with the real
  project names and summaries if these don't match.
- Add your actual CV PDF at `public/assets/Emmanuel_Nwosu_new_CV.pdf` so the
  "Download CV" buttons work.

## Deploying

The build output in `dist/` is static and can be deployed to Vercel,
Netlify, GitHub Pages, or any static host.
