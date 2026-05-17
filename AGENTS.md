# BlackSide Security — Agent Guide

## Stack
- **React 19** + **Vite 7** + **Tailwind CSS 4** (via `@tailwindcss/vite` plugin, no tailwind.config)
- **Three.js** (React Three Fiber + Drei), **GSAP**, **Lottie**, **EmailJS**
- Package manager: **npm** (only `package-lock.json` present)

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint all files with ESLint |

No test runner, no test command, no CI.

## Architecture
- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`
- **Sections** (`src/sections/`): Hero, About, Services, HowIWork, Experience, TechStack, Projects, Testimonials, Contact
- **Components** (`src/components/`): NavBar, SideBar, Footer, Loader, FloatingWhatsApp, Carousel, ContactForm, etc.
- All static content in `src/constants/index.js`
- Local fonts in `/public/fonts/` (Aeonik family, used via `@font-face` in `src/index.css`)
- 3D models in `/public/models/` (glTF)

## Identity
- **Brand:** BlackSide Security
- **Name:** Youness Boussedari
- **Title:** Cybersecurity Engineer | Offensive Security Specialist
- **Email:** `black1black234b@gmail.com`
- **Phone:** +212 632 260 694
- **Location:** Sidi Kacem, Morocco
- **GitHub:** https://github.com/Anonymous25-25
- **LinkedIn:** https://www.linkedin.com/in/youness-boussedari-34a93136b
- **Instagram:** https://www.instagram.com/anony_mous_25_25

## Conventions
- **Tailwind v4** — uses `@import "tailwindcss"` and `@theme` directive instead of `tailwind.config.js`. Custom colors/variables live in `src/index.css` under `@theme`.
- **ESLint only** — no Prettier config. Lint config in `eslint.config.js` (flat config).
- Build output goes to `dist/` (gitignored).

## Quirks
- `Boy.jsx` at repo root is an **empty stale file** — safe to delete.
- 3D model at `/public/models/boy-transformed.glb`
- Avatar should be placed at `/public/images/youness-avatar.png`
- ContactExperience.jsx imports ContactBoy from `"./ContactBoy"` (not `"./Boy"`)
