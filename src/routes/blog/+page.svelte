<script>
export let data;
</script>

<h1>Blog</h1>

<ul class="post-list">
{#each data.posts as post}
  <li class="post-list-item">
    <h2>
      <a href="{post.path}">{post.meta.title}</a>
    </h2>
    <time>{post.meta.date}</time>
  </li>
{/each}
</ul>

<style>
  .post-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
</style>
