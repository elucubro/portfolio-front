<script>
    import FaBars from 'svelte-icons/fa/FaBars.svelte'
    let toggle = false
    function showMobileMenu(){
        console.log('I hate Indians')
        toggle = !toggle 
    }
</script>

    <!-- Desktop Menu -->
    <nav class="flex flex-col items-center  bg-background pt-8 fixed top-0  w-full">
        <div class="flex w-[90vw] gap-10 items-center">

        <!-- Title -->
        <a href="/" class="w-full">
            <h1 class="text-2xl text-text">Tinotenda Mhandire</h1>
        </a>
        
        <!-- Navigation -->
        <ul class="md:flex gap-10 items-center hidden justify-end w-full text-text">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/cv">CV</a></li>
        </ul>

        <button class="h-6 w-6 md:hidden" on:click={showMobileMenu}><FaBars/></button>

        </div>

        <ul class="md:hidden text-semibold text-2xl gap-4 items-center border-solid border-t-2 border-secondary {toggle ? 'flex' : 'hidden'} flex-col justify-around w-[90vw] text-text">
            <li><div class="h-4"></div></li>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/project">Projects</a></li>
            <li><a href="/cv">CV</a></li>
            <li><div class="h-4"></div></li>
        </ul>
        <div class="border-solid border-b-2 border-secondary w-[90vw]"></div>
    </nav>
    
