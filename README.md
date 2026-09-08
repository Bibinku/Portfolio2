# Bibin K U — Portfolio

A single-page developer portfolio built with React + Vite for internship and
junior developer applications.

## Folder structure

```
bibin-portfolio/
├── index.html                 Page shell, SEO meta tags, Google Fonts
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                React entry point
│   ├── App.jsx                 Composes all sections
│   ├── index.css                Design tokens + all component styles
│   ├── assets/
│   │   └── profile.jpg          Profile photo (from resume/photo provided)
│   ├── data/
│   │   └── portfolioData.js     ALL personal content lives here (name,
│   │                            experience, projects, education, skills...)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Education.jsx        (also renders Certifications)
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── Reveal.jsx           Small helper for the on-scroll fade-in
```

## How to run it

1. Open this folder in VS Code (or any editor).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the URL Vite prints (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Updating your content

Everything text-based — your name, summary, experience, project details,
education, certifications, skills, email, links — lives in one file:

`src/data/portfolioData.js`

Edit that file and the whole site updates; you shouldn't need to touch the
component files for normal content changes.

To swap your photo, replace `src/assets/profile.jpg` with a new image of the
same filename (a square-ish or portrait-oriented photo works best).

## Notes

- There is no backend. The contact form builds a `mailto:` link with your
  message pre-filled, rather than pretending to submit anywhere.
- The two project cards link to the real URLs from your resume only
  (`kaarvienterprises.com` for Kaarvi Enterprises, and your GitHub repo for
  PetCare) — no invented links.
- Project cards show real screenshots you provided, saved under
  `src/assets/projects/`.
