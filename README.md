# Klirolabs website

Static company website for Klirolabs, covering custom websites, custom software, services, industries, process, case studies, and contact.

## Build locally

Run `node build.mjs` from this directory. The generated site is in `dist/`.

The build uses `SITE_ORIGIN` for canonical links, social metadata, structured data, and the sitemap. Without it, the build uses the original Sites URL. The Vercel project sets `SITE_ORIGIN` to `https://klirolabs.vercel.app`.

## Deployment

Vercel uses `vercel.json` to run the build and serve `dist/`. The production site is [klirolabs.vercel.app](https://klirolabs.vercel.app).

The contact form prepares an email to `hello@klirolabs.com` in the visitor's email app; it does not submit to a server.
