# Ali Ertaza — Engineering Portfolio

A responsive editorial portfolio with a dark navy, cyan, and violet theme, built with React, TypeScript, Vite, Tailwind CSS v4, and Lucide icons. Featured projects use architecture diagrams, and capability links connect skills to project evidence.

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

## Trunk-based workflow

`production` is the shared trunk and the GitHub default branch. Create small, short-lived feature branches from it and merge through pull requests. The required `Build` check installs the locked dependencies, checks TypeScript, and builds the portfolio on Node.js 22. Pull requests must be up to date with the trunk and have their review conversations resolved. A second-person approval is optional for this solo-maintained repository.

```bash
git switch production
git pull --ff-only
git switch -c feature/update-projects
# Make changes, then run npm run build.
git add .
git commit -m "Update portfolio projects"
git push -u origin feature/update-projects
gh pr create --base production
```

Review the Vercel preview and the build result, then squash-merge the pull request. Merged feature branches are deleted automatically. Direct pushes, force pushes, and deletion of `production` are blocked by the repository ruleset. The former long-lived `development` branch is retired.

Vercel should use `production` as its Production Branch and deploy previews for feature branches through the Git integration. This project uses the Git integration rather than a second deployment workflow in GitHub Actions. Deployment commands and the `dist` output directory are set in `vercel.json`.

## Personalize before publishing

1. **Email:** Contact links use `aliertaza104@gmail.com` in `src/App.tsx`.
2. **LinkedIn:** The About section links to https://www.linkedin.com/in/ali-ertaza-846972270/.
3. **Project evidence:** Add screenshots, demos, and public repository links only when you are ready to share them. Supreme Services currently has no repository link shown because one was not provided.
4. **Resume:** Resume PDFs are in `public/resumes/`. The data view uses the data engineering CV, the Android view uses the Android developer resume, and the web and complete views use the general resume.
5. **Accuracy:** Project statuses and descriptions are intentionally cautious. Update them when the current project state changes.
6. **Contact form:** This starter uses an email link, not a backend form. Connect a form provider or backend if you need message submissions on the site.

## Structure

```text
src/
  App.tsx       Editorial page, specialty views, capability evidence, and accessible project dialogs
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
