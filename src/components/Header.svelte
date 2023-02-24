<script>
  import { page } from '$app/stores';
  let current = $page.url.pathname;
</script>

<header>
  <a href="/" id="site-brand">Jeff Caldwell</a>

  <nav>
    <a href="/" class={current === '/' ? 'current' : ''}>Home</a>
    <a href="/blog" class={current === '/blog' ? 'current' : ''}>Blog</a>
    <a href="/about" class={current === '/about' ? 'current' : ''}>About</a>
  </nav>
</header>

<style>
  header {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  #site-brand {
    font-size: 2rem;
    font-weight: bolder;
    text-decoration: none;
    line-height: 1;
    padding: 0;
    margin: 0;
  }

  nav {
    font-size: var(--size-500);
    display: flex;
    gap: 1rem;
  }

  nav a {
    text-decoration: none;
   }

  nav a.current {
    text-decoration: underline;
    text-decoration-color: var(--link-accent);
    text-underline-offset: 0.125em;
    text-decoration-thickness: 0.125em;
  }

  @media (min-width: 45em) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

