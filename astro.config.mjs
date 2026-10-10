import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://joe-mu-yu.github.io',
  markdown: {
    shikiConfig: { theme: 'github-dark-high-contrast' },
  },
});
