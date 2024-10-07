<script>
	import skills from '$lib/Skills';
	import experiences from '$lib/Experiences'
</script>

<svelte:head>
	<title>Gavyn Ezell — About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<div id="about-section">
			<img src="linkedinpfp-original.png" alt="pfp">
			<p>
				I'm a recently graduated software engineer from the University of California, San Diego!
				I've gained experience from past internships and projects in writing backend software (API development, 
				managing database/data pipelines).
				I also enjoy doing projects in computer graphics and games! 
				I love tackling new problems and learning new things, and am currently looking for an opportunity to
				contribute to a team with the skills I've gained over the past couple of years.
				
			</p>
		</div>
		
		<h2>Experience</h2>
		{#each experiences as exp}
			<ul class="outer">
				<li>
					<h3>
						{exp.company} - {exp.title}
					</h3>
					<h4>{exp.duration}</h4>
					<ul class="greytext">
						{#each exp.description as bullet}
						<li>
							{bullet}
						</li>
						{/each}
					</ul>
				</li>
			</ul>
		{/each}

		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h3>
						{section}:
					</h3>
					<div class="list">
						{#each technologies as technology}
							<div class="greytext">
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
		
	</main>
</div>

<style>
	.outer {
		list-style-type: none;
		background: #111111;
		padding: 20px;
		border-radius: 10px;
	}

	.greytext {
		color: #708090;
	}

	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}


	#about-section {
		display:flex;
		align-items: center;
		justify-content: space-between;
		gap: 50px;

	}
	img {
		border-radius: 50%;
		width: 256px;
		height: 256px;
	}
	p {
		font-size: 18px;
		text-align: left;
	}
	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
