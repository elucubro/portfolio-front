<!-- FILEPATH: /home/elucubro/portfolio/front/src/routes/+page.svelte -->
<script lang="js">
	import { onMount } from 'svelte';
	export let data;
	import Card from '$lib/Blog/Card.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaHackerNewsSquare from 'svelte-icons/fa/FaHackerNewsSquare.svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<!-- SEO -->
<svelte:head>
	<title>Tinotenda Mhandire</title>
	<meta name="description" content="Tinotenda Mhandire's portfolio website." />
	<meta
		name="keywords"
		content="Tinotenda Mhandire, Tinotenda, Mhandire, Portfolio, Web Developer, Software Engineer, Software Developer, Web Designer, Web Development, Software Development, Web Design, Software Design, Web, Software, Design, Development, Designer, Developer, Engineer, Software Engineer, Software Developer, Web Engineer, Web Developer, Web Designer, Web Development, Software Development, Web Design, Software Design, Web, Software, Design, Development, Designer, Developer, Engineer, Software Engineer, Software Developer, Web Engineer, Web Developer, Web Designer, Web Development, Software Development, Web Design, Software Design, Web, Software, Design, Development, Designer, Developer, Engineer, Software Engineer, Software Developer, Web Engineer, Web Developer, Web Designer, Web Development, Software Development, Web Design, Software Design, Web, Software, Design, Development, Designer, Developer, Engineer"
	/>
	<meta name="author" content="Tinotenda Mhandire" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#000000" />
</svelte:head>

<section class="h-full w-full grid justify-center align-center">
	<div class="flex flex-col justify-center items-center h-full w-[90vw]">
		<div class="flex flex-col gap-5">
			<h1 class="text-6xl">
				Hello, I'm <span
					class="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-accent"
					>Tinotenda!</span
				>
			</h1>
			<div class="flex w-full justify-start items-center h-9">
				<div class="w-1/2 h-1 bg-secondary" />
				<div class="flex h-9 w-1/2 justify-end gap-5">
					<a href="https://www.linkedin.com/in/tinotenda-mhandire-a3843128a/" target="_blank"
						><div class="w-6 h-6 md:w-9 md:h-9"><FaLinkedin /></div></a
					>
					<a href="https://github.com/elucubro" target="_blank"
						><div class="w-6 h-6 md:w-9 md:h-9"><FaGithubSquare /></div></a
					>
					<a href="https://www.linkedin.com/in/tinotenda-mhandire-a3843128a/" target="_blank"
						><div class="w-6 h-6 md:w-9 md:h-9"><FaTwitterSquare /></div></a
					>
					<a href="https://news.ycombinator.com/user?id=tinomhandire" target="_blank"
						><div class="w-6 h-6 md:w-9 md:h-9"><FaHackerNewsSquare /></div></a
					>
				</div>
			</div>

			<h2 class="text-2xl">Freelance Full-Stack Software Engineer | Perth AU</h2>
		</div>
	</div>
</section>

<section class="h-full w-full bg-background grid justify-center align-center">
	<div class="flex flex-col justify-start py-32 items-center h-full w-[90vw]">
		<div class="flex flex-col gap-5 w-full">
			<h1 data-aos="fade-right" class="text-6xl">Latest Posts:</h1>
			<div data-aos="fade-right" class="w-1/2 h-1 bg-secondary" />
			<h2 data-aos="fade-right" class="text-xl md:text-2xl">
				These are blog posts, case studies, and opinon pieces related to work I do.
			</h2>
			<ul data-aos="fade-up" class='lg:grid lg:justify-between lg:grid-cols-[repeat(auto-fit,minmax(32rem,1fr));] 2xl:py-20 py-40 flex flex-col items-center lg:gap-5 2xl:gap-10 gap-10 w-[90vw] place-items-center '>
				{#each data.props.posts.reverse() as { path, metadata: { title, date, img_src, desc }}}
				  <li >
					<a rel="prefetch" href="blog/{path}"><Card title={title} image_source={img_src} published_date={date} desc={desc}/></a> 
				  </li>
				{/each}
			   </ul>
		</div>
	</div>
</section>
