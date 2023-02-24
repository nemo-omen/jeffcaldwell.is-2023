<script>
  export let data;
  const { title, date, Content } = data;
</script>

<article class="post">
  <h1>{title}</h1>
  <time>{date}</time>
  <Content />
</article>
