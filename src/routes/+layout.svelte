<script lang="ts">
	import Navbar from '$lib/components/NavBar.svelte';
	import { page } from '$app/stores';
</script>

<Navbar segment={$page.url.pathname} />
<div id="homeintro">
	<slot/>
</div>
<style>
	#homeintro {
		padding-top: 0px;
	}
	/* * {
		box-sizing: border-box;
	} */

	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}

	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
		justify-content: start;
	}
	
	:global(#svelte) {
		width: 100vw;
		height: 100%;
		max-width: 900px;
		display: flex;
		flex-direction: column;
	}
	


	:global(html),
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0a0908;
	}

	:global(body) {
		background-color: var(--background);
		background-size: 200% 200%;
		color: white;
		margin: 0;	
		padding: 0;
		box-sizing: border-box;
		display: grid;
		line-height: 1.75;
		place-items: center;
		height: 100%;
		overflow-x: hidden;
	}

	:global(h1) {
		border: 0;
	}

	:global(::selection) {
		color: white;
		background: #ca3c25;
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
		height: 8px;
		border-radius: 1px;
	}

	:global(::-webkit-scrollbar-thumb) {
		background-color: #fafffd;
		border-radius: 3px;
	}

	:global(::-webkit-scrollbar-track) {
		background-color: transparent;
		border-radius: 1px;
	}

	@media (min-width: 900px) {
		:global(body) {
			padding: 0 0px;
		}
	}
</style>
