<script>
  // import { Image } from '../../../components/Image.svelte';
  export let data;
  
  const { title, date, image, description, imagealt, Content } = data;
  

</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>

<article class="post flow">
  <img src="{image}" alt={imagealt}>
  <!-- <Image url={image} alt={description} width={1080} height={720} /> -->
  <div class="post-header">
    <h1>{data.title}</h1>
    <time>{data.date}</time>
  </div>
  <svelte:component this={data.content} />
  <!-- <Content /> -->
</article>

<style>
  .post-header {
    margin-bottom: var(--size-800);
  }

  .post-header h1{
    margin-bottom: 1rem;
  }

  .post-header time {
    margin-top: 0;
  }
</style>
