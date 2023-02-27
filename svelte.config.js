// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
// import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";
import highlighter from "./src/lib/highlighter.js";
import { imagetools } from "@zerodevx/svelte-img/vite";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess({
      preserve: ["ld+json"],
    }),
    mdsvex({
      extensions: [".md"],
      highlight: {
        highlighter,
      },
      // layout: {
      // blog: "./src/routes/blog/Layout.svelte",
      // },
    }),
  ],

  kit: {
    adapter: adapter(),
  },
  plugins: [imagetools()],
};

export default config;
