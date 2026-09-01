// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// production home is www.aketoo.com; SITE_URL overrides it for preview deploys
// (github pages sets it to https://aketoo-hf.github.io, see .github/workflows/deploy.yml)
const site = process.env.SITE_URL || 'https://www.aketoo.com';

// https://astro.build/config
export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    // zh lives at the root, en is prefixed with /en/
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh',
        locales: {
          zh: 'zh-CN',
          en: 'en',
        },
      },
    }),
  ],
  image: {
    // keep the pipeline local, no remote image services
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
