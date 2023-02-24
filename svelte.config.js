// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: [".md"],
      // layout: {
      // blog: "./src/routes/blog/Layout.svelte",
      // },
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
