import { fetchMarkdownPosts } from "../../lib/utils.js";

const siteURL = "https://jeffcaldwell.is";
const siteTitle = "Jeff Caldwell";
const siteDescription =
  "The personal website of Jeff Caldwell, web developer, writer, and computer science student.";

export const prerender = true;

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) =>
    new Date(b.date) - new Date(a.date)
  );

  const filteredPosts = sortedPosts.filter((post) => post.meta.draft !== true);

  const body = render(filteredPosts);
  const options = {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
  };

  return new Response(
    body,
    options,
  );
};

const render = (posts) => (`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${
  posts
    .map(
      (post) =>
        `<item>
<guid isPermaLink="true">${siteURL}/blog/${post.path}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/blog/${post.path}</link>
<description>${post.meta.description}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`,
    )
    .join("")
}
</channel>
</rss>
`);
