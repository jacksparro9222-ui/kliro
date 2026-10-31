# Klirolabs website

Static company website for Klirolabs, covering custom websites, custom software, services, industries, process, case studies, and contact.

## Build locally

Run `node build.mjs` from this directory. The generated site is in `dist/`.

The build uses `SITE_ORIGIN` for canonical links, social metadata, structured data, and the sitemap. Without it, the build uses `https://www.klirolabs.com`. The Vercel project sets `SITE_ORIGIN` to the same production URL.

## Deployment

Vercel uses `vercel.json` to run the build and serve `dist/`. The production site is [www.klirolabs.com](https://www.klirolabs.com/).

Set `FORMSPREE_ENDPOINT` to the account's form URL (for example, `https://formspree.io/f/xxxxxxxx`) to submit contact enquiries directly to Formspree. Without that setting, the contact form prepares an email to `hello@klirolabs.com` in the visitor's email app.
