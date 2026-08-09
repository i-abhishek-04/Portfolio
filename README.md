# Abhishek Raj — Portfolio

Built with React + Vite + Tailwind CSS v4.

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Output goes to `dist/`. Deploy the `dist/` folder to Vercel (recommended, matches your other projects) — just import this repo on vercel.com and it auto-detects Vite.

## Structure
- `src/data.js` — all content (bio, projects, skills, links). Edit this file to update anything without touching components.
- `src/components/` — Navbar, Hero, About, Work (Projects/Skills tabs), Contact, Footer
- `public/resume.pdf` — the file served by the "Download CV" / "Resume" buttons. Replace this file to update your resume.
