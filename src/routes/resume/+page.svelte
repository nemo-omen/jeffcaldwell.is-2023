<script>

</script>

<h1 class="page-title">Resume</h1>

<article class="resume flow">
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
    <h3>KLST News</h3>
    <address>San Angelo, TX</address>
    <h4>Digital Executive Producer</h4>
    <time>August, 2022 - Present</time>
    <ul>
      <li>Leads and supports a team of local journalists to publish accurate and topical information in a deadline-driven environment.</li>
      <li>Delivers year-over-year audience growth of more than 18 percent using audience analysis, metrics, and SEO best practices.</li>
      <li>Coordinates with management to produce, update, and maintain training guides and software walkthroughs for onboarding and staff reference.</li>
    </ul>
    <h4>Digital Content Producer</h4>
    <time>June, 2019 - August, 2022</time>
    <ul>
      <li>Wrote and edited local news articles using AP style guidelines to communicate complex stories to a local audience.</li>
      <li>Produced streaming content using technical knowledge of video and graphics software and created custom on-screen graphics using HTML, CSS, and JavaScript.</li>
    </ul>
    <h4>News Photographer & Multimedia Journalist</h4>
    <time>March, 2018 - June, 2019</time>
    <ul>
      <li>Used interviewing, writing, videography, and video editing skills to produce daily stories for broadcast.</li>
    </ul>
    <h3>SMP Digital Graphics</h3>
    <address>New York, NY</address>
    <h4>Production Manager</h4>
    <time>2007 - December, 2017</time>
    <ul>
      <li>Used careful attention to detail and graphic design principles to ensure high-quality commercial and fine art printing for diverse clients like <em>the Metropolitan Opera</em>, <em>the New York Public Library</em>, and <em>Last Week Tonight with John Oliver</em>.</li>
    </ul>
  </div>
</section>
<section>
    <h2>
      <a href="#education" aria-hidden="true" tabindex="-1" class="section-link">
        Education
      </a>
    </h2>
    <div class="resume-section-content">
    <h3>Angelo State University</h3>
    <h4>BS of Computer Science</h4>
    <time>In progress, 2020 - Present</time>
    
    <h3>Howard College</h3>
    <h4>Associate of Arts</h4>
    <time>May 2020</time>
  </div>
</section>
</article>

<style>
.resume {
  --flow-space: var(--size-900);
}
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

ul {
margin: 1rem;
padding: 0;
list-style-type: square;
}

li::marker {
  color: var(--hover);
}

h3 {
font-size: var(--size-600);
font-weight: 500;
margin-bottom: 0.5rem;
}

h4, li {
  margin-bottom: 0.5rem;
  font-size: var(--size-500);
}

address, time {
  font-size: var(--size-500);
  font-style: italic;
}

h4 {
color: var(--hover);
}
/* address, time { */
/*   margin-top: 1rem; */
/* } */

@media(min-width: 55rem) {
  .resume section {
    flex-direction: row;
    gap: var(--size-900);
  }
}
</style>
