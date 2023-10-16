<script lang="js">
    export let data;
    import Card from '$lib/Blog/Card.svelte';
    
</script>

<section class="grid justify-center items-center w-full h-full">


<ul class='lg:grid 2xl:grid-rows-2 2xl:grid-cols-3 lg:grid-cols-2 lg:grid-rows-3 flex flex-col lg:gap-5 2xl:gap-10 gap-10 w-full'>
 {#each data.props.posts.reverse() as { path, metadata: { title, date, img_src, desc }}}
   <li >
     <a rel="prefetch" href="blog/{path}"><Card title={title} image_source={img_src} published_date={date} desc={desc}/></a> 
   </li>
 {/each}
</ul>

</section>