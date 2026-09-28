import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://ravulapreethi.github.io/blog
export default defineConfig({
  site: 'https://ravulapreethi.github.io/blog',
  base: '/blog',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
