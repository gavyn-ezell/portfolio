<script>
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaFile from 'svelte-icons/fa/FaFile.svelte';
	import ProjectList from '$lib/components/ProjectList.svelte';

</script>

<svelte:head>
	<title>Gavyn Ezell - Software Engineer</title>
</svelte:head>

<h1>Gavyn Ezell</h1>
<h3>Software Engineer</h3>
<div class="icons">
	<a
		href="https://www.linkedin.com/in/gavyn-ezell/"
		aria-label="Linkedin"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<FaLinkedin />
		</div>
	</a>
	<a
		href="https://github.com/gavyn-ezell/"
		aria-label="GitHub"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div class="icon">
			<FaGithub />
		</div>
	</a>
	<a
		href="GavynEzellResume.pdf"
		aria-label="resume"
		target="_blank"
		rel="noopener noreferrer"
	>
		<div style="transform: scale(0.7)"class="icon">
			<FaFile />
		</div>
	</a>
</div>

<ProjectList/>


<style>
	a {
		color: white;
		text-decoration: none;
	}

	h1, h3 {
		text-align: center;
		margin: 0;

	}

	h1 {
		font-weight: 700;
	}


	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 25px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

</style>
