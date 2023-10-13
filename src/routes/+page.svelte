<!-- FILEPATH: /home/elucubro/portfolio/front/src/routes/+page.svelte -->

<script lang="js">
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithubSquare from 'svelte-icons/fa/FaGithubSquare.svelte';
	import FaTwitterSquare from 'svelte-icons/fa/FaTwitterSquare.svelte';
	import FaHackerNewsSquare from 'svelte-icons/fa/FaHackerNewsSquare.svelte';
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
						><div class="w-9 h-9"><FaLinkedin /></div></a
					>
					<a href="https://github.com/elucubro" target="_blank"
						><div class="w-9 h-9"><FaGithubSquare /></div></a
					>
					<a href="https://www.linkedin.com/in/tinotenda-mhandire-a3843128a/" target="_blank"
						><div class="w-9 h-9"><FaTwitterSquare /></div></a
					>
					<a href="https://news.ycombinator.com/user?id=tinomhandire" target="_blank"
						><div class="w-9 h-9"><FaHackerNewsSquare /></div></a
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
			<h1 class="text-6xl">Latest Posts:</h1>
			<div class="w-1/2 h-1 bg-secondary" />
			<h2 class="text-2xl">
				These are blog posts, case studies, and opinon pieces related to work I do.
			</h2>
		</div>
	</div>
</section>
