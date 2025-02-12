<script>
	import { Menu } from 'lucide-svelte';
    import { media } from 'svelte-match-media';
    import { onMount } from 'svelte';

    let mobileNavState = $state("start");
    onMount(() => {

        const mediaQuery = window.matchMedia('(width >= 640px)')
        mediaQuery.addListener(()=>{
            mobileNavState = "start"
        })
    });
	
    const NavLinks = ['About', 'Experience', 'Projects'];
	let activeLink = $state(0);
    
    function handleCollapsible() {
        if (mobileNavState == "start" || mobileNavState == "closed") {
            mobileNavState = "open";
        }
        else {
            mobileNavState = "closed"
        }
        
    }
</script>

<div class="flex flex-col sm:flex-row">
	<nav

		class='fixed top-0 {mobileNavState}
            flex flex-col overflow-hidden justify-between
            w-full items-start gap-4
            bg-[#2471A3]
            sm:static sm:items-center
            sm:min-h-[440px] sm:h-vh
            sm:min-w-[270px] sm:w-[270px] sm:justify-center sm:gap-4 py-4'
	>
        <div class="flex flex-row justify-between sm:justify-center px-4 py-4 w-full">
            <a
			onclick={() => {
				activeLink = 0;
			}}
			href="#"
		>
            <span class="text-2xl text-white inline sm:hidden"> Gavyn Ezell </span>
			<img
				class="hidden sm:inline aspect-square w-[140px] min-w-[140px] rounded-full border-8 border-[#508DB6]"
				src="headshot-ff.png"
				alt="headshot"
			/>
		</a>

        <button class="cursor-pointer" onclick={handleCollapsible}>
            <Menu class="z-[5] sm:hidden" size="32" color="#ffffff" />
        </button>

        </div>

		<ul id="navLinks" class="text-left sm:text-center text-2xl font-extralight px-4">
			{#each NavLinks as name, i}
				{#if i == activeLink}
					<li>
						<a
							class="text-white"
							onclick={() => {
								activeLink = i;
							}}
							href="#">{name}</a
						>
					</li>
				{:else}
					<li>
						<a
							onclick={() => {
								activeLink = i;
							}}
							href="#">{name}</a
						>
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
	<div class="mr-auto ml-auto w-full min-h-screen h-screen overflow-scroll">
		<section class="flex flex-col w-full border">
			<div class="">
				<h1 class="font-roboto">Gavyn Ezell</h1>
				<h3>Software Engineer</h3>
                <p>aaaaaa</p>
  
			</div>
		</section>
	</div>
</div>