<script lang="ts">
	import Header from '$lib/Header/Header.svelte';
    import Footer from '$lib/Footer/Footer.svelte';

    import '../app.css'
</script>

<div class="flex flex-col h-full justify-center items-center m-auto bg-background w-full">
    <!-- Header -->
    <Header />


    <main class="flex-grow w-full h-screen bg-background">
        <!-- Content -->
        <slot class="w-full h-full bg-background" />
        <div class="transparent h-12"></div>
    </main>
    
    <!-- Footer -->
    <Footer />
</div>