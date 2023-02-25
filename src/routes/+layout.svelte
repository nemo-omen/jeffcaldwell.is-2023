<script>
  import { fade } from 'svelte/transition';
  import Header from '../components/Header.svelte';
  import '../css/style.css';
  export let data;
</script>

<Header current={data.currentRoute}/>

{#key data.currentRoute}
<main id="maincontent" in:fade={{duration: 150, delay: 150}}>
  <slot />
</main>
{/key}
