<script>
import Post from '../../components/PostItem.svelte';
export let data;
let hasPosts = false;


if(data.posts.length > 0) {
  hasPosts = true;
}

</script>

<svelte:head>
  <title>Jeff Caldwell | Blog</title>
  <meta name="description" content="The personal blog of Jeff Caldwell; web developer, writer, and student." /> 
</svelte:head>

<h1 class="page-title">Blog</h1>

{#if hasPosts}
<ul class="post-list flow">
  {#if data.posts}
    {#each data.posts as post}
      <Post {post} />
    {/each}
  {/if}
</ul>
{:else}
<div class="nope">
  <h1>No posts to see here!</h1>
  <img src="/images/Grackle.svg" alt="An illustration of a dark blue, almost black, bird's head within a light red circle, The bird has angry yellow eyes." width="300" height="300">
  <a href="/" class="larger">Go back home</a>
</div>
{/if}
<style>
  .post-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    --flow-space: var(--size-600);
  }

  .nope {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.larger {
  font-size: var(--size-600);
}
  @media(min-width: 55em) {
    .post-list {
      max-width: 55rem;
      margin: 0 auto;
    }
  }
</style>
