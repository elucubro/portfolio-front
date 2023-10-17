<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
    import Banner from '$lib/Blog/banner/Banner.svelte';
	import { goto } from '$app/navigation';
	export let data: PageData;
	function thing(){
		goto("/blog")
	}
	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<section class="flex flex-col justify-start items-center bg-background w-full h-full">
<div class="w-[90vw] flex flex-col justify-start bg-background items-left">
<Banner image_src={data.frontmatter.img_src} image_alt={data.frontmatter.image_alt} pusblished_date={data.frontmatter.date} title={data.frontmatter.title}/>
<div class="text-left flex flex-col w-screen bg-background prose py-32">
<svelte:component this={component} />
<button class="w-[90vw] h-16 text-white font-semibold text-3xl bg-primary rounded-3xl" on:click={thing}>back to blog</button>
</div>
</div>
</section>

