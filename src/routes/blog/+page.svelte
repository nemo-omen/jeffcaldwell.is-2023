<script>
import Post from '../../components/PostItem.svelte';


export let data;
</script>

<svelte:head>
  <title>Jeff Caldwell | Blog</title>
  <meta name="description" content="The personal blog of Jeff Caldwell; web developer, writer, and student." /> 
</svelte:head>

<h1 class="page-title">Blog</h1>

<ul class="post-list flow">
{#if data.posts}
{#each data.posts as post}
 <Post {post} />
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

  
  @media(min-width: 55em) {
    .post-list {
      max-width: 55rem;
      margin: 0 auto;
    }
  }
</style>
