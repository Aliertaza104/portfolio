# Ali Ertaza — Engineering Portfolio

A responsive dark, futuristic personal portfolio built with React, TypeScript, Vite, Tailwind CSS v4, and Lucide icons.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Personalize before publishing

1. **Email:** Contact links use `aliertaza104@gmail.com` in `src/App.tsx`.
2. **LinkedIn:** The About section links to https://www.linkedin.com/in/ali-ertaza-846972270/.
3. **Project evidence:** Add screenshots, demos, and public repository links only when you are ready to share them. Supreme Services currently has no repository link shown because one was not provided.
4. **Resume:** Both supplied PDFs are in `public/resumes/`. The data view downloads the data engineering CV; other views download the general resume. Both are available from the complete portfolio.
5. **Accuracy:** Project statuses and descriptions are intentionally cautious. Update them when the current project state changes.
6. **Contact form:** This starter uses an email link, not a backend form. Connect a form provider or backend if you need message submissions on the site.

## Structure

```text
src/
  App.tsx       Main page, project data, filters, and project detail modal
  main.tsx      React entry point
  styles.css    Responsive design and Tailwind import
index.html      Metadata and font loading
vite.config.ts Vite + React + Tailwind configuration
```

## Specialty portfolio views

Use the selector above the hero or share a direct URL:

- `/?role=web`: web headline, web/backend projects, and web skills.
- `/?role=android`: Android headline, Asaan Karobar, and Android skills.
- `/?role=data`: data engineering headline, CityFlow and IMDb ETL projects, and data skills.
- `/`: all disciplines.

Views survive refresh and support browser Back/Forward. Profile copy is defined in `profiles` in `src/App.tsx`; project records and explicit specialty assignments are in `src/projects.ts`.

## Organizations

Organization cards are maintained in `src/organizations.ts`. All four user-confirmed memberships appear in the complete portfolio. Supreme Services and Zanderio also appear in the web view with related project buttons and verified GitHub organization links. All four cards link to the GitHub organizations supplied by the user. NAF and Lab23 Sites currently have no specialty assignments or related projects; populate `roles` and `projectIds` when that information is available.
