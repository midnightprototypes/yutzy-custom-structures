import { defineConfig } from 'astro/config';

// site: the real production domain — makes canonical URLs correct.
// inlineStylesheets 'always': fold CSS into the HTML so each page is a single
// self-contained file (fast, and easy to preview by just opening it).
// Sitemap is a static file in public/sitemap.xml for now; when the site grows
// to many pages, switch to the @astrojs/sitemap integration to auto-generate it.
export default defineConfig({
  site: 'https://www.yutzyconstruction.com',
  // format 'file' → /pole-barns.html (flat files), so the site previews by
  // double-clicking locally and deploys cleanly to any static host.
  build: { inlineStylesheets: 'always', format: 'file' },
  // This project lives on a mapped network drive (N:) whose realpath resolves
  // to a UNC path. Vite keys module IDs by realpath, so without this the
  // page-to-CSS mapping never matches and stylesheets are emitted but never
  // injected into the HTML. Keeping paths as-is fixes it.
  // Same drive: native fs.watch fails on the share ("UNKNOWN: unknown error,
  // watch"), which floods the dev server with unhandled rejections until it
  // never comes up. Polling is the workaround. Dev-only; no effect on builds.
  vite: {
    resolve: { preserveSymlinks: true },
    server: { watch: { usePolling: true, interval: 700 } },
  },
});
