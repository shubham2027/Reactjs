# ReactJs Practice Collection

A collection of small React practice projects and notes used for learning and experimentation.

## Overview

- Multiple example apps and snippets are organised into folders (e.g. `api`, `basics`, `form`, `practice`, `redux`, `student_portal`, etc.).
- Small JS/notes files are in the repository root (e.g. `React_Notes.js`, `basics.js`).

## Running a project

Most folders are Vite-based React apps. To run any app locally:

```bash
cd <project-folder>
npm install
npm run dev
```

Example: run the `basics` app

```bash
cd basics
npm install
npm run dev
```

Open the provided local URL (usually `http://localhost:5173`) shown by Vite.

## Recommended workflow

- Create a new branch for larger changes: `git checkout -b feature/your-topic`.
- Stage and commit small changes often: `git add . && git commit -m "Describe change"`.
- Push to GitHub: `git push -u origin main` (or your branch name).

## Useful tips

- Add a `.gitignore` (if missing) and exclude `node_modules/`, `dist/`, `.env`, and editor files.
- Use Node.js LTS (recommended) and ensure `npm` or `pnpm` is available.

## Contributing

- Add new practice folders with a short `README.md` inside describing the exercise and how to run it.
- Open a PR or push to your fork and create a merge request when ready.

---

If you want, I can also create a repository-level `.gitignore`, add per-project README files, or generate a short table of contents listing every folder. Tell me which and I'll add them.
