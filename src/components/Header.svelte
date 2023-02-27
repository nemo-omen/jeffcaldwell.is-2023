<script>
  export let current;
  const dev = import.meta.env.DEV;
  $:currentSplit = current.substr(0, 5);
</script>

<header>
  <a href="#maincontent" id="skip" class="visible-hidden">Skip to Content</a>
  <a href={dev ? '/' : 'https://jeffcaldwell.is'} id="site-brand" rel="me" aria-label="Jeff Caldwell">Jeff Caldwell</a>

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
    <!-- <a href="/resume"class={current === '/resume' ? 'current' : ''}> -->
    <!--   Resume -->
    <!-- </a> -->
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

  /* Skip Link */
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
    transform: translateX(-50%);
    transition: transform 0.3s ease-out;
    font-size: var(--size-500);
    font-family: 'Noto Sans', system-ui, sans-serif;
    font-weight: 500;
    padding: 0.125em 0.25em;
    background: var(--bg);
  }

  #skip:focus {
    transform: translate(-50%, 2rem);
    /* transform: translateX(-50%); */
  }

  /* Main header link */
  #site-brand {
    font-size: var(--size-700);
    font-weight: bolder;
    text-decoration: none;
    line-height: 1;
    padding: 0.125em;
    margin: 0;
    font-family: 'Noto Sans', system-ui, sans-serif;
    font-weight: 500;
    letter-spacing: 0.03em;
  }
  
  nav {
    font-size: var(--size-500);
    display: flex;
    gap: 1rem;
    overflow: visible;
    font-family: 'Noto Sans', system-ui, sans-serif;
    font-weight: 500;
  }

  nav a {
    position: relative;
    text-decoration: none;
    background-color: transparent;
    color: var(--fg);
    z-index: 2;
    display: inline-block;
    /* transition: color 0.2s ease-out; */
   }

   nav a::before {
     content: '';
     position: absolute;
     width: 100%;
     height: 0.15em;
     background-color: var(--accent);
     bottom: 0;
     left: 0;
     transform-origin: bottom right;
     transform: scaleX(0);
     transition: transform 0.2s ease-out;
     color: var(--accent);
     z-index: -1;
   }

  nav a:focus,
  nav a:hover,
  nav a:active,
  nav a.current {
    background-color: transparent;
    /* color: var(--bg); */
  }

   nav a:focus::before,
   nav a:hover::before,
   nav a:active::before,
   nav a.current::before {
    transform-origin: bottom left;
    transform: scaleX(1);
    /* color: var(--accent); */
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

