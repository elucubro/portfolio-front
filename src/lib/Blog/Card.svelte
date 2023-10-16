<script lang="ts">
    export let image_source: string;
    export let published_date: string;
    export let title: string;
    export let desc: string;
</script>
<div class="w-[32rem] border-solid hover:border-2 border-primary h-64 flex flex-col rounded-xl utility hover:shadow-xl  hover:shadow-text transition-all " style="background-image: url({image_source});">
<div class="h-[12rem] text-background bg-gradient-to-t rounded-2xl from-transparent to-black p-5">{desc}</div>
<div class="h-[4rem] flex justify-center items-center text-center p-5 text-xl rounded-2xl text-background font-bold bg-gradient-to-t from-black to-transparent">{title} | {published_date}</div>
</div> 
<style>
    .utility {
        background-size: cover;
        background-clip: border-box;
        background-position: center;
    }
</style>