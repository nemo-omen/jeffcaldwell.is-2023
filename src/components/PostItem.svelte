<script>
import Image from '../components/Image.svelte';

export let post;
</script>

<li class="post-list-item">
    {#if post.meta.image}
      <a href="{post.path}" class="post-list-item-image">
        <!-- <img src={post.meta.image} alt="{post.meta.description}"> -->
        <Image
          url={post.meta.image}
          alt={post.meta.description}
          width={460}
          height={270}
          loading="eager"
          sizes="(max-width: 400px) 360px, (max-width: 600px) 480px, (max-width: 800px) 720px, (max-width: 1200px) 1080px, (min-width: 1201) 1080px"
          />
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


  <style>
  .post-list-item {
    max-width: 55rem;
    display: grid;
    grid-template-rows: 1fr auto;
  }

  .post-list-item-image:focus{
    background: var(--bg);
    background: none;
  }

  .post-list-item h2 a {
    text-decoration: none;
  }
  
  .post-list-item h2 {
    margin-bottom: 0.25em;
    margin-top: 0;
    line-height: 1.2;
  }

  time {
    padding: 0 0.25rem;
  }

  @media(min-width: 55rem) {
    .post-list-item {
      display: grid;
      gap: var(--size-800);
      grid-template-rows: unset;
      grid-template-columns: 1fr 1fr;
    }

  }

  </style>
