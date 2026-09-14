# Emmanuel Nwosu — Portfolio

React (Vite + Tailwind) implementation of the Figma design, built with
`src/data/portfolioData.js` as the single source of truth for content.

## Project structure

```
src/
├── assets/
│   └── Emmanuel_Nwosu_new_CV.pdf   # replace with your real CV, same filename
├── components/                      # reusable, non-content-specific pieces
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Reveal.jsx                   # scroll-reveal animation wrapper
│   └── ui.jsx                       # Button, Tag, Card, SectionHeading, Eyebrow, LinkArrow
├── sections/                        # one file per page section
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
├── data/
│   └── portfolioData.js             # ALL content lives here
├── App.jsx
├── main.jsx
└── index.css
```

`npm install && npm run dev` to run locally, `npm run build` for production.

## How the data maps to the design

`portfolioData.js` contains exactly the data object you provided
(`NAV_LINKS`, `HERO`, `ABOUT`, `EXPERIENCE`, `PROJECTS`, `SKILLS`,
`SERVICES`, `CONTACT`) unchanged, plus one addition: `SECTION_COPY`, which
holds presentational headings/subheadings that mirror the Figma screenshots
(e.g. "Backend-first. Full-stack capable.", "A backend-led engineering
toolkit."). These are layout copy, not factual claims — every fact,
project, skill, and stat still comes only from your original data objects.

## Judgment calls made — please review these

A few places where the Figma screenshots and your data object didn't line
up exactly. I sided with your data as the source of truth per your
instructions, but you should decide if these are right:

1. **Hero/CTA wording**: the screenshots show "Explore projects" and a
   "Download CV" link; your data's `HERO.primaryCta`/`secondaryCta` say
   "View Projects" and "Let's Work Together". I used your data's exact
   labels rather than the screenshot's wording.
2. **Hero headline/supporting text**: similarly, I used `HERO.headline` and
   `HERO.supporting` verbatim rather than the different phrasing shown in
   the screenshot.
3. **Featured "Selected Work" projects**: the screenshot features Weldork,
   Obodo Backend, Billvenv, and Zimason as the highlighted 2×2 grid. Since
   your `PROJECTS` array doesn't map 1:1 to the screenshot's exact set, I
   chose Weldork, Obodo Backend, **Billway**, and Zimason instead — the four
   entries with the most complete descriptions and live links. Swap this
   list in `src/sections/Projects.jsx` (`FEATURED_TITLES`) if you'd rather
   match the screenshot's exact selection.
4. **Billway / Billway Mobile App**: the screenshot shows these as two
   separate project cards. Your data has them combined into one `Billway`
   entry with two links. I kept them combined as one card with both links,
   since splitting them would mean restructuring data you provided as-is.
5. **"Earlystart" project card**: the screenshot shows a standalone card for
   this, but it only exists in your data as a project *name* mentioned
   under the Ashpot experience entry — there's no description, tech, or
   link for it anywhere. I did not add a fabricated card for it, to avoid
   inventing content. Let me know if you want a minimal card added (title +
   "An Ashpot project" only, same as how Skileman is handled).
6. **Zimason's full name**: the screenshot shows "Zimason Nigeria Limited
   Business Management System"; your data says "Zimason Business
   Management System". I used your data's exact title.
7. **Experience section rows**: the screenshot's timeline shows an umbrella
   "Professional software development" row summarizing your whole tech
   stack, plus prose descriptions per company (not tags). Since this
   summary row doesn't exist in your `EXPERIENCE` array, I generate its
   text programmatically from your `SKILLS` data at render time — nothing
   hardcoded or invented, just your existing skills restated as a sentence.
8. **Mobile navigation**: the Figma screenshots are desktop-only. I added a
   simple horizontal-scrolling nav for small screens since no mobile design
   was provided — worth a look on an actual phone to see if you want
   something different (e.g. a slide-out menu).

## Deploying

`dist/` is a static build — deploy to Vercel, Netlify, GitHub Pages, or any
static host.
