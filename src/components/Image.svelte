<script>
import Img from '@zerodevx/svelte-img';
export const prerender = false;

export let url;
export let width;
export let height;
export let alt = "Default placeholder text";
export let loading = "lazy";
export let decoding = "async";
export let sizes = "(max-width: 600px) 480px, (max-width: 1100) 720px, (max-width: 2000) 1080px, (min-width: 2001) 1920px";

const src = [
  {format: 'webp', src: url, width: 360, height: 203},
  {format: 'webp', src: url, width: 480, height: 270},
  {format: 'webp', src: url, width: 720, height: 405},
  {format: 'webp', src: url, width: 1080, height: 720},
  {format: 'webp', src: url, width: 1600, height: 900},
  {format: 'webp', src: url, width: 1920, height: 1080}
];

</script>

<Img 
  {src}
  {alt}
  {loading}
  {decoding}
  {sizes} />
