import { fetchMarkdownPosts } from "/src/lib/utils.js";
import { json } from "@sveltejs/kit";

const mode = import.meta.env.MODE;

export const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();
    console.log(allPosts);

    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });

    const filteredPosts = sortedPosts.filter((post) =>
      post.meta.draft !== undefined && post.meta.draft !== true
    );

    console.log(mode);

    const posts = mode === "production" ? filteredPosts : sortedPosts;

    for (const post of posts) {
      if (post.meta.description) {
        if (post.meta.description.length > 155) {
          console.warn(
            `Description for post '${post.meta.title}' is greater than 155 characters. Be more concise!`,
          );
        }
      } else {
        console.warn(
          `No description for post '${post.meta.title}'. Tsk, tsk, tsk!`,
        );
      }
    }

    return json(posts);
  } catch (error) {
    // console.error(error);
    return json(error);
  }
};
