<script>
	import { Menu, Github, Linkedin } from 'lucide-svelte';
	import { media } from 'svelte-match-media';
	import { onMount } from 'svelte';

	let mobileNavState = $state('start');
	onMount(() => {
		const mediaQuery = window.matchMedia('(width >= 640px)');
		mediaQuery.addListener(() => {
			mobileNavState = 'start';
		});
	});

	const NavLinks = ['About', 'Experience', 'Projects'];
	let activeLink = $state(0);

	function handleCollapsible() {
		if (mobileNavState == 'start' || mobileNavState == 'closed') {
			mobileNavState = 'open';
		} else {
			mobileNavState = 'closed';
		}
	}
</script>

<svelte:head>
	<title>Gavyn Ezell | Software Engineer</title>
</svelte:head>

<div class="flex flex-col sm:flex-row">
	<nav
		class="oswald-base fixed top-0 z-[100] {mobileNavState}
            sm:h-vh flex w-full flex-col
            items-start justify-between gap-4
            overflow-hidden
            bg-[var(--main-color)] py-4
            sm:static sm:max-h-screen
            sm:w-[270px] sm:min-w-[270px] sm:items-center sm:justify-center sm:gap-4"
	>
		<div class="flex w-full flex-row justify-between px-4 py-4 sm:justify-center">
			<a
				onclick={() => {
					activeLink = 0;
				}}
				href="#"
			>
				<span class="inline text-2xl font-bold text-[#ffffffff] sm:hidden"> Gavyn Ezell </span>
				<img
					class="hidden aspect-square w-[160px] min-w-[160px] rounded-full border-6 border-[#ABC7A0] sm:inline"
					src="headshot-ff.png"
					alt="headshot"
				/>
			</a>

			<button class="cursor-pointer" onclick={handleCollapsible}>
				<Menu class="z-[5] sm:hidden" size="32" color="#ffffffff" />
			</button>
		</div>

		<ul id="navLinks" class="px-4 text-left text-2xl font-extralight sm:text-center">
			{#each NavLinks as name, i}
				{#if i == activeLink}
					<li>
						<a
							class="activeLink"
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
	<div class="w-full h-screen overflow-scroll"> <!--border border-red-500 -->
		<section id="about" class="relative flex oswald-base w-full h-screen sm:max-w-[1280px] flex-col border-b border-gray-300"> <!--border border-blue-500 -->
			<div class="absolute top-1/2 -translate-y-1/2 ml-6"> <!--border border-green-500 -->
				<h3 class="mb-4 text-[1.5rem] leading-[1.2rem]">SOFTWARE ENGINEER</h3>
				<h1 class="px-0 text-[4.5rem] leading-[4.5rem]">
					GAVYN <span class="text-[var(--main-color)]">EZELL</span>
				</h1>
				<div class="pl-[2px] text-[1.35rem] leading-[3rem] font-normal mb-5">
					Seattle, WA ·
					<a class="text-[var(--main-color-darker)]" href="mailto:ezellgavyn@gmail.com"
						>EZELLGAVYN@GMAIL.COM</a
					>
				</div>
				<p class="text-[var(--main-text-color)] font-normal w-3/4 text-xl mb-12">
					I am a passionate software engineer who loves to collaborate with others
					and solve fun and interesting problems through tech. From internships, various projects, and coursework, I've gained experience writing full stack software, with a backend focus.
				</p>

                <a href="GavynEzellResume.pdf" target="_blank" class="text-[var(--main-color)] font-light text-2xl block mb-4">View Resume as PDF</a>
                <div class="flex flex-row gap-4">
                    <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                        <a href="https://www.linkedin.com/in/gavyn-ezell/" target="_blank">
                            <Linkedin fill="white" class="border" color="white" size="36"/>
                        </a>
                    </div>
                    <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                        <a href="https://github.com/gavyn-ezell" target="_blank">
                            <Github fill="white" class="border" color="white" size="36"/>
                        </a>
                    </div>
                </div>
			</div>
		</section>

        <section id="experience" class="relative flex oswald-base w-full h-screen sm:max-w-[1280px] flex-col"> <!--border border-blue-500 -->
			<div class="absolute top-1/2 -translate-y-1/2 ml-6"> <!--border border-green-500 -->
				<h3 class="mb-4 text-[1.5rem] leading-[1.2rem]">SOFTWARE ENGINEER</h3>
				<h1 class="px-0 text-[4.5rem] leading-[4.5rem]">
					GAVYN <span class="text-[var(--main-color)]">EZELL</span>
				</h1>
				<div class="pl-[2px] text-[1.35rem] leading-[3rem] font-normal mb-5">
					Seattle, WA ·
					<a class="text-[var(--main-color-darker)]" href="mailto:ezellgavyn@gmail.com"
						>EZELLGAVYN@GMAIL.COM</a
					>
				</div>
				<p class="text-[var(--main-text-color)] font-normal w-3/4 text-xl mb-12">
					I am a passionate software engineer who loves to collaborate with others
					and solve fun and interesting problems through tech. From internships, various projects, and coursework, I've gained experience writing full stack software, with a backend focus.
				</p>

                <a href="GavynEzellResume.pdf" target="_blank" class="text-[var(--main-color)] font-light text-2xl block mb-4">View Resume as PDF</a>
                <div class="flex flex-row gap-4">
                    <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                        <a href="https://www.linkedin.com/in/gavyn-ezell/" target="_blank">
                            <Linkedin fill="white" class="border" color="white" size="36"/>
                        </a>
                    </div>
                    <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                        <a href="https://github.com/gavyn-ezell" target="_blank">
                            <Github fill="white" class="border" color="white" size="36"/>
                        </a>
                    </div>
                </div>
			</div>
		</section>

        
        
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>
