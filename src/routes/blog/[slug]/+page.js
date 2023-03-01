export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, date, image, description, imagealt } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    date,
    image,
    description,
    imagealt,
  };
}
