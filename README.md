# Klirolabs website

Static company website for Klirolabs, covering custom websites, custom software, services, industries, process, case studies, and contact.

## Build locally

Run `node build.mjs` from this directory. The generated site is in `dist/`.

The build uses `SITE_ORIGIN` for canonical links, social metadata, structured data, and the sitemap. Without it, the build uses `https://www.klirolabs.com`. The Vercel project sets `SITE_ORIGIN` to the same production URL.

## Deployment

Vercel uses `vercel.json` to run the build and serve `dist/`. The production site is [www.klirolabs.com](https://www.klirolabs.com/).

The contact form submits enquiries to the Klirolabs Formspree endpoint and shows a success or error message. `FORMSPREE_ENDPOINT` can override the endpoint used at build time if the account's form changes.
