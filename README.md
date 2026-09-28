# Preethi's Notes — personal blog

A static personal blog built with [Astro](https://astro.build), deployed to
GitHub Pages. Readers can leave comments via
[Giscus](https://giscus.app) (GitHub Discussions).

This is the GitHub version of the blog. A separately hosted preview version
exists elsewhere; this repo is the canonical, comment-enabled home of the blog.

## Local development

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> ./dist
npm run preview  # preview the production build
```

## Publishing to GitHub Pages (one-time setup)

1. **Create a public GitHub repository** (e.g. `preethi-notes` or
   `YOUR_USERNAME.github.io`) and push this project to its `main` branch:
   ```bash
   git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. **Set the site URL.** Edit `astro.config.mjs`:
   - User/org site (`YOUR_USERNAME.github.io`): set
     `site: 'https://YOUR_USERNAME.github.io'` and leave `base` commented out.
   - Project site (`YOUR_USERNAME.github.io/YOUR_REPO`): set `site`
     accordingly and uncomment `base: '/YOUR_REPO'`.
3. **Enable Pages.** In the repo: Settings → Pages → Build and deployment →
   Source → **GitHub Actions**. The included workflow
   (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
4. Your blog is now live at the Pages URL (shareable, e.g. on LinkedIn).

## Enabling comments (Giscus, one-time setup)

1. Make sure the repo is **public**.
2. Install the Giscus app on the repo: https://github.com/apps/giscus
3. Enable Discussions: Settings → General → Features → **Discussions**.
4. Go to https://giscus.app, enter your repo (`YOUR_USERNAME/YOUR_REPO`),
   choose a discussion category (the **Announcements** category is recommended),
   and copy the generated `repoId` and `categoryId`.
5. Fill in `src/giscus.ts` (`repo`, `repoId`, `category`, `categoryId`) and set
   `enabled: true`. Push — the discussion thread appears under each post.

## Adding a new post

1. Create `src/pages/posts/<slug>.astro` (copy
   `src/pages/posts/teaching-noise-where-to-go.astro` as a template).
2. Add the `<Giscus />` component at the bottom for comments.
3. Link it from the homepage teaser card in `src/pages/index.astro`.
4. Push to `main` — the site rebuilds and redeploys automatically.

## Project layout

- `src/pages/index.astro` — homepage (hero, preview, bio, topics)
- `src/pages/posts/` — one page per post, each with its own Giscus thread
- `src/components/Giscus.astro` — comments embed (reads `src/giscus.ts`)
- `src/giscus.ts` — **the only file with Giscus credentials**
- `src/layouts/Base.astro` — shared layout and editorial styles
- `public/profile.jpg` — author photo
- `.github/workflows/deploy.yml` — Pages build & deploy
