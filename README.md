# Eduardo Garza Site

SvelteKit/Svelte 5 personal website configured for Cloudflare Pages.

The previous Create React App implementation is preserved in `old-site/`.

## Local Checks

```sh
npm install
npm run lint
npm run build
npm run dev
```

The app runs locally at `http://127.0.0.1:5173`.

## Cloudflare Pages

Recommended Pages setup:

- Framework preset: SvelteKit
- Production branch: whichever branch you use for production
- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Node version: `22`

The site does not require environment variables.
