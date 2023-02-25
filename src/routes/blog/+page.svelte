<script>
export let data;

</script>

<h1 class="page-title">Blog</h1>

<ul class="post-list flow">
{#if data.posts}
{#each data.posts as post}
  <li class="post-list-item">
    {#if post.meta.image}
      <a href="{post.path}">
        <img src={post.meta.image} alt="">
      </a>
    {/if}
    <div class="post-list-meta">
      <h2>
        <a href="{post.path}">
          {post.meta.title}
        </a>
      </h2>
      <time>{post.meta.date}</time>
      <p>{post.meta.description}</p>
    </div>
  </li>
{/each}
{/if}
</ul>

<style>
  .post-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    --flow-space: var(--size-600);
  }

  .post-list-item {
    max-width: 55rem;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .post-list-item a img {
    /* width: 100%; */
    /* aspect-ratio: 16 / 9; */
  }

  .post-list-item h2 a {
    text-decoration: none;
  }
  
  .post-list-item h2 {
    margin-bottom: 0.25em;
    margin-top: 0;
    line-height: 0.8;
  }

  time {
    padding: 0 0.25rem;
  }

  @media(min-width: 45em) {
    .post-list-item {
      /* display: flex; */
      /* align-items: flex-start; */
    }

    .post-list-item {
      display: grid;
      gap: var(--size-800);
      grid-template-rows: unset;
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
