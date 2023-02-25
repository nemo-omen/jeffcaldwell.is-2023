<script>
  import { page } from '$app/stores';
</script>

<div class="nope">
  <h1>{$page.status}: {$page.error.message}</h1>
  <img src="/images/Grackle.svg" alt="An illustration of a dark blue, almost black, bird's head within a light red circle, The bird has angry yellow eyes." width="300" height="300">
  <a href="/" class="larger">Go back home</a>
</div>

<style>
.nope {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.larger {
  font-size: var(--size-600);
}
</style>
