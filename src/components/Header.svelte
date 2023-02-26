<script>
  export let current;
  $:currentSplit = current.substr(0, 5);
  // console.log(currentSplit);
</script>

<header>
  <a href="#maincontent" id="skip" class="visible-hidden">Skip to Content</a>
  <a href="/" id="site-brand">Jeff Caldwell</a>

  <nav>
    <a href="/" class={current === '/' ? 'current' : ''}>
      Home
    </a>
    <a href="/blog" class={currentSplit === '/blog' ? 'current' : ''}>
      Blog
    </a>
    <a href="/about"class={current === '/about' ? 'current' : ''}>
      About
    </a>
  </nav>
</header>

<style>
  header {
    padding: 2rem 1rem;
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
    transform: translateY(2rem);
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
    overflow: visible;
  }

  nav a {
    position: relative;
    text-decoration: none;
    background-color: transparent;
    color: var(--fg);
   }

   nav a::before {
     content: '';
     position: absolute;
     width: 100%;
     height: 0.125em;
     background-color: var(--accent);
     bottom: 0;
     left: 0;
     transform-origin: left;
     transform: scaleX(0);
     transition: all 0.2s ease-out;
     color: var(--accent);
   }

  nav a:focus,
  nav a:hover,
  nav a:active,
  nav a:current {
    background-color: transparent;
  }

  nav a:focus {
    outline: 0.125em solid var(--accent);
  }

   nav a:hover::before,
   nav a:active::before,
   nav a.current::before {
    transform-origin: left;
    transform: scaleX(1);
    color: var(--accent);
    /* background-size: 100% 0.125em; */
   }

  /* nav a.current { */
    /* text-decoration: underline; */
    /* text-decoration-color: var(--link-accent); */
    /* text-underline-offset: 0.125em; */
    /* text-decoration-thickness: 0.125em; */
  /* } */

  @media (min-width: 45em) {
    header {
      flex-direction: row;
      justify-content: space-between;
    }
  }
</style>

