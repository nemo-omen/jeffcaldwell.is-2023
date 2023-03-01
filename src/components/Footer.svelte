<script>
  const startDate = new Date('February 26, 2023');
  const currentDate = new Date();
  const startYear = startDate.getFullYear();
  const currentYear = currentDate.getFullYear();
</script>

<footer>
  <div class="footer-inner">
    <section>
      <h2>Pages</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/resume">Resume</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </section>
    <section>
      <h2>Links</h2>
      <ul>
        <li><a href="/rss">RSS</a></li>
        <li><a href="https://hachyderm.io/@trainingmontage" rel="me">Mastodon</a></li>
        <li><a href="https://github.com/nemo-omen" rel="me">GitHub</a></li>
      </ul>
    </section>
    <section>
      <p>
        &copy; {startYear}
        {#if startYear != currentYear}
          - {currentYear}
        {/if}
        Jeff Caldwell.
      </p>
      <p>Thanks for stopping by!</p>
      <p>Made with <a href="https://kit.svelte.dev">SvelteKit</a>.</p>
    </section>
  </div>
</footer>

<style>
  footer {
    border-top: 2px dotted var(--hover);
    margin-top: var(--size-900);
  }
  footer *{
    font-size: var(--size-500);
    color: var(--hover);
  }

  footer section {
    padding: var(--size-700);
    text-align: center;
  }

  footer section:not(:last-of-type) {
    border-bottom: 2px dotted var(--hover)
  }

  footer section p {
    text-align: left;
  }

  footer h2 {
    /* font-size: var(--size-400); */
    /* text-align: left; */
    color: var(--hover);
  }

  footer ul {
    margin: 0 1rem;
    padding: 0;
    list-style-type: '';
  }

  @media(prefers-color-scheme: light) {
    footer *, footer h2 {
      color: var(--fg);
    }
  }

  @media(min-width: 50rem) {
    .footer-inner {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: start;
    }

    footer section {
      padding: 0 var(--size-900);
    }

    footer section:not(:last-of-type) {
      border-right: 2px dotted var(--hover);
      border-bottom: none;
      /* padding: 0 var(--size-800); */
    }
  }
</style>
