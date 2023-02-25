import { fetchMarkdownPosts } from "/src/lib/utils.js";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  try {
    const allPosts = await fetchMarkdownPosts();

    const sortedPosts = allPosts.sort((a, b) => {
      return new Date(b.meta.date) - new Date(a.meta.date);
    });

    for (const post of sortedPosts) {
      console.log(post.meta);
    }

    return json(sortedPosts);
  } catch (error) {
    // console.error(error);
    return json(error);
  }
};
