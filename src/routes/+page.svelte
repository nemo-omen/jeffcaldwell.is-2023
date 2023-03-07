<script>

</script>

<svelte:head>
  <title>Jeff Caldwell</title>
  <meta name="description" content="Jeff Caldwell is a web developer, writer, journalist, and student." />
</svelte:head>

<h1 class="page-title">Welcome</h1>
<article>
  <h2 class="callout">Hey, <span class="callout-highlight">I'm Jeff</span>. I'm a web developer, writer, journalist, and student.</h2>

  <p class="message-larger">
    I love making websites and writing. I'm transitioning from a career in journalism into web development and technical writing. <a href="/resume" class="resume-link">Check out my resume</a>.
    
  </p>
  <p class="message">
    I live in Texas, where I supervise a team of digital journalists. I'm also finishing up a degree in computer science. You can find out what I'm working on and writing about at the <a href="/blog">blog</a> and you can learn more about me at <a href="/about">about</a>.
  </p>
</article>
<style>
  article {
    max-width: 55rem;
  }
  .callout {
    font-size: var(--size-600);
    font-weight: 500;
    max-width: unset;
  }

  .callout-highlight {
    display: inline-block;
    padding: 0.125em;
    color: var(--accent);
  }

  .message a, .message-larger a {
    color: var(--accent);
    text-underline-offset: 0.3em;
  }

  .resume-link {
    color: var(--yellow);
  }

  @media(prefers-color-scheme: light) {
  .message a, .message-larger a {
    color: currentColor;
  }
  }

  @media(min-width: 45rem) {
    .callout {
      font-size: var(--size-800);
    }

    .message-larger {
      font-size: var(--size-700);
    }
    
    .message {
      font-size: var(--size-500);
    }
  }
</style>
