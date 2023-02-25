<script>
  export let data;
  const { title, date, image, Content } = data;
</script>

<article class="post">
  <img src="{image}" alt="">
  <h1>{data.title}</h1>
  <time>{data.date}</time>
  <svelte:component this={data.content} />
  <!-- <Content /> -->
</article>
