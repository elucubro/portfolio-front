<script lang="ts">
    export let image_source: string;
    export let published_date: string;
    export let title: string;
    export let desc: string;
</script>
<div class="md:w-[32rem] md:h-64 w-[24rem] h-[12rem] border-solid hover:border-1 border-transparent  flex flex-col rounded-2xl utility hover:shadow-2xl  hover:shadow-text transition-all " style="background-image: url({image_source});">
<div class="md:h-[12rem] h-[9rem] text-background bg-gradient-to-t rounded-2xl text-sm md:text-lg from-transparent to-black p-5">{desc}</div>
<div class="md:h-[4rem] h-[3rem] flex justify-center items-center text-center p-5 text-lg md:text-xl rounded-2xl text-background font-bold bg-gradient-to-t from-black to-transparent">{title}</div>
</div> 
<style>
    .utility {
        background-size: cover;
        background-clip: border-box;
        background-position: center;
    }
</style>