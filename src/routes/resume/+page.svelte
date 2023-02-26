<script>

</script>

<h1 class="page-title">Resume</h1>

<article class="resume post">
<section>
  <h2>
    <a href="#summary" aria-hidden="true" tabindex="-1" class="section-link">
      Summary
    </a>
  </h2>
  <div class="resume-section-content">
    <p>Writer and supervisor with over four years of experience in digital journalism seeks to transition into technical writing and web development. Uses a unique background in design, journalism, and computer science to make great looking, accessible websites and to communicate complex ideas simply and concisely. Works with JavaScript (and loves <a href="https://svelte.dev">Svelte</a>), CSS, and responsive, semantic HTML.</p>
  </div>
</section>
<section>
    <h2 id="experiance">
      <a href="#experience" aria-hidden="true" tabindex="-1" class="section-link">Experience</a>
    </h2>
  <div class="resume-section-content">
    <p></p>
  </div>
</section>
<section>
    <h2>
      <a href="#education" aria-hidden="true" tabindex="-1" class="section-link">
        Education
      </a>
    </h2>
  <div class="resume-section-content">
    <p></p>
  </div>
</section>
</article>

<style>
.resume section {
  display: flex;
  flex-direction: column;
  /* gap: var(--size-600); */
}

.section-link {
  text-decoration: none;
  position: relative;
}

.section-link::before {
  content: '#';
  position: absolute;
  left: -1.25ch;
  top: 0;
  /* line-height: 1; */
  opacity: 0;
  text-decoration: underline;
  transition: opacity 0.3s ease-out;
}

.section-link:hover::before {
  opacity: 1;
  color: var(--hover);
}

@media(min-width: 55rem) {
  .resume section {
    flex-direction: row;
    gap: var(--size-900);
  }
}
</style>
