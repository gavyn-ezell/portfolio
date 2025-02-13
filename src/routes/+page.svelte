<script>
	import { Menu } from 'lucide-svelte';
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
		class="fixed top-0 z-[100] {mobileNavState}
            sm:h-vh flex w-full flex-col
            items-start justify-between gap-4
            overflow-hidden
            bg-[var(--main-color)] py-4
            sm:static sm:min-h-[440px]
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
	<div class="mt-[96px] mr-auto ml-auto h-screen min-h-screen w-full overflow-scroll sm:mt-0 sm:py-32">
		<section class="oswald-base flex w-full flex-col p-8 pl-2 border-b border-gray-400">
			<div class="m-4 ml-8">
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

                <a href="GavynEzellResume.pdf" target="_blank" class="text-[var(--main-color)] font-light text-2xl">View Resume as PDF</a>
			</div>
		</section>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
</style>
