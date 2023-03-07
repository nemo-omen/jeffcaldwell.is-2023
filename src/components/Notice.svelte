<script>
  export let type = 'notice';
</script>

<div class="callout flow {type}">
  <slot />
</div>

<style>
  :root {
    --border-color: var(--fg);
  }
  .notice {
    --border-color: var(--hover);
  }

  .warning {
    --border-color: var(--light-red);
  }

  .callout {
    padding: 1.5em;
    border: 1px solid var(--border-color);
  }

  .callout :global(:last-child) {
    margin-bottom: 0;
  }

  .callout :global(h2),
  .callout :global(h3),
  .callout :global(h4) {
    font-size: var(--size-500);
    border-bottom: 1px solid var(--border-color);
    margin: 0;
    padding: 0 0 0.25em 0;
  }
</style>
