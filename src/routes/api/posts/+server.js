import { fetchMarkdownPosts } from "/src/lib/utils.js";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });

    for (const post of sortedPosts) {
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

    return json(sortedPosts);
  } catch (error) {
    // console.error(error);
    return json(error);
  }
};
