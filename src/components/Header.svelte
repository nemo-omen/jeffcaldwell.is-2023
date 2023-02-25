<script>
  export let current;
  $:currentSplit = current.substr(0, 5);
  // console.log(currentSplit);
</script>

<header>
  <a href="#maincontent" id="skip" class="visible-hidden">Skip to Content</a>
  <a href="/" id="site-brand">Jeff Caldwell</a>

  <nav>
    <a href="/" class={current === '/' ? 'current' : ''}>Home</a>
    <a href="/blog" class={currentSplit === '/blog' ? 'current' : ''}>Blog</a>
    <a href="/about"class={current === '/about' ? 'current' : ''}>About</a>
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

  .visible-hidden {
    clip: rect(1px 1px 1px 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .visible-hidden:focus {
    clip: auto;
    height: auto;
    overflow: auto;
    position: absolute;
    width: auto;
  }

  #skip {
    top: 0;
    left: 50%;
    transition: transform 0.3s ease-out;
    font-size: var(--size-500);
    font-weight: 600;
    padding: 0.125em 0.25em;
  }

  #skip:focus {
    transform: translateY(50%);
  }

  #site-brand {
    font-size: 2rem;
    font-weight: bolder;
    text-decoration: none;
    line-height: 1;
    padding: 0.125em;
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

