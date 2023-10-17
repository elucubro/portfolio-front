<script lang="js">
    export let data;
    import Card from '$lib/Blog/Card.svelte';
    
</script>

<section class="grid justify-center items-center w-full h-full">


<ul class='lg:grid lg:grid-cols-[repeat(auto-fit,minmax(32rem,1fr));] 2xl:py-20 py-40 flex flex-col items-center place-items-center lg:gap-5 2xl:gap-10 gap-10 w-[90vw] '>
 {#each data.props.posts.reverse() as { path, metadata: { title, date, img_src, desc }}}
   <li >
     <a rel="prefetch" href="blog/{path}"><Card title={title} image_source={img_src} published_date={date} desc={desc}/></a> 
   </li>
 {/each}

</ul>

</section>