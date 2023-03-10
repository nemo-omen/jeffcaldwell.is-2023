<script>
  import Image from '../../components/Image.svelte';
</script>
<svelte:head>
<title>About | Jeff Caldwell</title>
<meta name="description" content="Jeff Caldwell is a web developer, technical writer, student, and digital journalist." />
</svelte:head>


<h1 class="page-title">About</h1>

<article>
<div class="about-header">
  <Image alt="Jeff Caldwell, a white man with dark hair and a beard wearing dark-rimmed glasses faces the camera with a hint of a smile on his face. He wears a dark-colored flannel over a navy t-shirt. The beginnings of gray hair can be seen in various spots on his beard. The light, warmly-colored wood wall behind him is blurred out." width="400" height="400" url="/images/Me2.webp"/>
</div>

<p>
I'm a digital journalist in the last year of my computer science degree in San Angelo, Texas. I love making websites and writing, and I focus on creating sites that are accessible, fast, and great looking.
</p>

<p>
I grew up in San Angelo but spent most of my adulthood living in Brooklyn, NY, where I worked in the print industry making cool stuff for clients like the <em>New York Public Library</em> and <em>Last Week Tonight with John Oliver</em>.
</p>

<p>
I moved back to San Angelo in 2018 to pursue my degree and got a job as a camera operator at the local tv news station. It was only a short time before I found my way into the newsroom, first as a news photographer, then as a multimedia journalist. Eventually I moved onto the digital team and covered local news by writing articles instead of shooting and editing video.
</p>

<p>
Now I lead a small team of digital journalists for the station's website. I'm not out in the field getting news as much as I used to be, but I'm proud of the team we've been able to build, and it's been amazing to see the growth of the journalists who work for me.
</p>

<p>
I've been working toward a degree in computer science since 2020 after I used HTML, CSS, and JavaScript to make on-screen graphics for a live stream. Before then, I wanted a degree in communications. However, coding was too much fun, so I changed my major.
</p>

<p>
I still love journalism and serving my community, but I would like to make a change. I'm looking for a position as a technical writer or a front-end developer focusing on semantic HTML and accessibility. My experience in journalism, education in computer science, and focus on accessibility allow me to understand complex subjects and present them to people in a way they can immediately understand.
</p>

<p>
If you're hiring, take a look at <a href="/resume">my resume</a>, and let's talk.
</p>
</article>

<style>
article {
  max-width: 55rem;
}

article .about-header {
  /* display: flex; */
  /* justify-content: center; */
  float: right;
}

article :global(img) {
  width: 8rem;
  height: 8rem;
  margin: 0 0 1rem 1rem;
  border-radius: 50%;
}

@media(min-width: 45rem) {
  article :global(img) {
    width: 12rem;
    height: 12rem;
    margin: 0 0 2rem 2rem;
  }

  p {
    max-width: 56rem;
  }
}

@media(min-width: 61rem) {
  article :global(img){
    width: 16rem;
    height: 16rem;
  }
}

</style>
