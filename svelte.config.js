import adapter from "@sveltejs/adapter-cloudflare";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    runes: true,
  },
  kit: {
    alias: {
      "@/*": "src/*",
    },
    adapter: adapter({
      fallback: "plaintext",
      routes: {
        include: ["/*"],
        exclude: [
          "<build>",
          "<prerendered>",
          "/assets/*",
          "/favicon.png",
          "/icons/*",
          "/manifest.json",
          "/mozart/*",
          "/robots.txt",
        ],
      },
    }),
  },
};

export default config;
