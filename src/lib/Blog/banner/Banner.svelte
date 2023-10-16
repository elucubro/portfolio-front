<script lang="ts">
    export let image_src: string;
    export let image_alt: string;
    export let pusblished_date: string;
    export let title: string;    
</script>

<div class="w-full flex flex-col gap-4 justify-start items-center">
<img class="w-[90vw]" src={image_src} alt={image_alt}>
<div class="flex gap-10 items-center justify-between w-full">
<h2 class="text-lg">Written on {pusblished_date}</h2>
<h2 class="text-lg">Tinotenda Mhandire</h2>
</div>
</div>