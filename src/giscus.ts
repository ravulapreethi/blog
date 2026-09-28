/**
 * Giscus comments configuration.
 *
 * HOW TO FILL THIS IN (takes ~5 minutes):
 * 1. Create a PUBLIC GitHub repo and push this site to it.
 * 2. Install the Giscus app on the repo: https://github.com/apps/giscus
 * 3. Enable Discussions on the repo (Settings → General → Features → Discussions).
 * 4. Go to https://giscus.app, enter your repo (e.g. "your-username/your-repo"),
 *    pick a discussion category (the "Announcements" category is recommended),
 *    and copy the generated values below.
 *
 * Until these are filled in, the comments section shows a friendly
 * "comments coming soon" note instead of the Giscus thread.
 */

export const giscusConfig = {
  // e.g. "preethi-ravula/blog"
  repo: "ravulapreethi/blog" as `${string}/${string}`,

  // From https://giscus.app after entering your repo — e.g. "R_kgDOG..."
  repoId: "R_kgDOUvT9Lw",

  // Discussion category name — e.g. "Announcements"
  category: "Announcements",

  // From https://giscus.app — e.g. "DIC_kwDOG..."
  categoryId: "DIC_kwDOUvT9L84DGjjt",

  // Mapping strategy for which discussion backs each page
  mapping: "pathname" as const,

  // Set to true once the four values above are filled in
  enabled: true,
};
