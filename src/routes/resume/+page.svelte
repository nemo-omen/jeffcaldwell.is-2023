<script>

</script>
<svelte:head>
  <title>Resume | Jeff Caldwell</title>
  <meta name="description" content="Writer and supervisor with over four years of experience in digital journalism seeks to transition into technical writing and web development. Uses a unique background in design, journalism, and computer science to make great looking, accessible websites and to communicate complex ideas simply and concisely." />
</svelte:head>

<h1 class="page-title">Resume</h1>

<article class="resume">
<section>
  <div class="section-header">

    <h2 id="summary" aria-label="Summary">
      <!-- <a href="#summary" aria-hidden="true" tabindex="-1" class="section-link"> -->
      <!--   <span class="icon"></span> -->
      <!-- </a> -->
        Summary
    </h2>
  </div>
  <div class="resume-section-content">
    <p>Writer and supervisor with over four years of experience in digital journalism seeks to transition into technical writing and web development. Uses a unique background in design, journalism, and computer science to make great looking, accessible websites and to communicate complex ideas simply and concisely. Works with JavaScript (and loves <a href="https://svelte.dev">Svelte</a>), CSS, and responsive, semantic HTML.</p>
  </div>
</section>
<section>
    <div class="section-header">
      <h2 id="experiance" aria-label="Experience">
        Experience
        <!-- <a href="#experience" aria-hidden="true" tabindex="-1" class="section-link"> -->
        <!--   <span class="icon"></span> -->
        <!-- </a> -->
      </h2>
    </div>
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
  <div class="section-header">
    <h2 id="education" aria-label="Education">
        Education
        <!-- <a href="#education" aria-hidden="true" tabindex="-1" class="section-link"> -->
        <!--   <span class="icon"></span> -->
        <!-- </a> -->
    </h2>
  </div>
  <div class="resume-section-content">
    <h3>Angelo State University</h3>
    <h4>BS of Computer Science</h4>
    <time>In progress, 2020 - Present</time>
    
    <h3>Howard College</h3>
    <h4>Associate of Arts</h4>
    <time>May 2020</time>
  </div>
</section>
<section>
  <div class="section-header">
    <h2 id="skills">Skills</h2>
  </div>
  <div class="resume-section-content">
    <h3>Technical</h3>
    <ul>
      <li>
        HTML
      </li>
      <li>
        CSS
      </li>
      <li>
        JavaScript
      </li>
      <li>
        C++
      </li>
      <li>
        Adobe Illustrator
      </li>
      <li>
        Adobe Photoshop
      </li>
      <li>
        Adobe Premiere Pro
      </li>
      <li>
        Microsoft Word
      </li>
      <li>
        Microsoft Excel
      </li>
      <li>
        WordPress
      </li>
    </ul>

    <h3>Practical</h3>
    <ul>
      <li>
        Journalism
      </li>
      <li>
        Web Publishing
      </li>
      <li>
        Interviewing
      </li>
      <li>
        Editing
      </li>
      <li>
        Information Gathering and Research
      </li>
      <li>
        Visual Communication
      </li>
      <li>
        Design Fundamentals
      </li>
      <li>
        Web Design
      </li>
      <li>
        Team Management
      </li>
    </ul>
  </div>
</section>
</article>

<style>
article {
  /* --flow-space: var(--size-900); */
  padding: 0;
  margin: 0;
  /* height: 100%; */
}

section {
  margin-bottom: var(--size-700);
  height: 100%;
}

h2 {
  margin-bottom: 0;
  padding: 0;
}

.section-link {
  text-decoration: none;
  position: relative;
}

.section-link::before {
  content: '#';
  position: absolute;
  left: -1.5ch;
  top: 0;
  /* line-height: 1; */
  opacity: 0;
  /* text-decoration: underline; */
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


@media(min-width: 55rem) {
  .resume {
    max-width: 55rem;
    margin: 0 auto;
  }
  
  section {
    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: var(--size-800);
    height: 100%;
  }

  h2 {
    position: sticky;
    position: -webkit-sticky;
    top: 2rem;
    /* position: relative; */
    text-align: right;
  }
}
</style>
