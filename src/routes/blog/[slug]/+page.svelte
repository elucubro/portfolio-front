<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';
    import Banner from '$lib/Blog/banner/Banner.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<section class="flex flex-col justify-start items-center bg-background w-full h-full">
<div class="w-[90vw] flex flex-col justify-start bg-background items-left">
<Banner image_src={data.frontmatter.img_src} image_alt={data.frontmatter.image_alt} pusblished_date={data.frontmatter.date} title={data.frontmatter.title}/>
<div class="text-left w-screen bg-background prose py-32">
<svelte:component this={component} />
</div>
</div>
</section>

