<script>
  import { fade } from 'svelte/transition';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import '../css/fonts.css';
  import '../css/style.css';
  export let data;
  const mode = import.meta.env.MODE;
</script>

<svelte:head>
{#if mode === 'production'}
  <script defer data-domain="jeffcaldwell.is" src="https://plausible.io/js/script.js"></script>
{/if}
</svelte:head>
<a href="#maincontent" id="skip" class="visible-hidden">Skip to Content</a>

<Header current={data.currentRoute}/>

{#key data.currentRoute}
<main id="maincontent" in:fade={{duration: 150, delay: 150}}>
  <slot />
</main>
{/key}

<Footer />
