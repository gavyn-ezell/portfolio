<script>

	import { Menu, Github, Linkedin } from 'lucide-svelte';
	import { scrollY } from 'svelte/reactivity/window';
	import { media } from 'svelte-match-media';
	import { onMount } from 'svelte';
	import Projects from '$lib/index'
	import ProjectCard from '$lib/ProjectCard.svelte';



	let mainContainer
	let mobileNavState = $state('start');
	onMount(() => {
		const mediaQuery = window.matchMedia('(width >= 640px)');
		mediaQuery.addListener(() => {
			mobileNavState = 'start';
		});

		mainContainer.addEventListener('scroll', ()=>{
			const sections = document.getElementsByTagName("section")
			const links = document.getElementsByClassName("navLink")
			var current = "";
			
			for (let i = 0; i < sections.length; i++) {
				const sectionTop = sections[i].offsetTop;
				if (mainContainer.scrollTop >= sectionTop ) {
					current = sections[i].getAttribute("id"); 
				}
			}

			for (let i = 0; i < links.length; i++) {
				links[i].classList.remove("activeLink")
				if (links[i].id == "link-"+current) {
					links[i].classList.add("activeLink");
				}

			}
		})

	});

	const NavLinks = ['About', 'Experience', 'Projects', 'Education', 'Skills'];
	let activeLink = $state(0);

	function handleCollapsible() {
		if (mobileNavState == 'start' || mobileNavState == 'closed') {
			mobileNavState = 'open';
		} else {
			mobileNavState = 'closed';
		}
	}

	function scrollToSection(event) {
		const el = document.querySelector(event.target.getAttribute('href'));
		if (!el) return;
    	el.scrollIntoView({
      		behavior: 'smooth'
    	});
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
				href="#About"
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
						<!-- svelte-ignore a11y_missing_attribute -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<a
                            href="#{name}"
							class="activeLink navLink"
							id="link-{name}"
							onclick={(e)=> {
								activeLink = i;
								scrollToSection(e);
							}}>{name}</a
						>
					</li>
				{:else}
					<li>
						<!-- svelte-ignore a11y_missing_attribute -->
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<!-- svelte-ignore a11y_no_static_element_interactions -->
						<a
                            href="#{name}"
							id="link-{name}"
							class="navLink"
							onclick={(e)=> {
								activeLink = i;
								scrollToSection(e);
							}}>{name}</a
                        >
					</li>
				{/if}
			{/each}
		</ul>
	</nav>
	<div bind:this={mainContainer} class="w-full h-screen overflow-auto scroll-smooth"> <!--border border-red-500 -->
		<section id="About" class="relative oswald-base w-full h-screen sm:max-w-[1280px] border-b border-gray-300"> <!--border border-blue-500 -->
			<div class="absolute top-[50%] chromefix ml-6"> <!--border border-green-500 -->
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
					and solve fun and interesting problems through tech. From internships, various projects, and coursework, I've gained experience writing fullstack software.
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

        <section id="Experience" class="relative flex oswald-base w-full sm:max-w-[1280px] flex-col py-12 border-b border-gray-300">
            <div class="ml-6">
                <h2 class="text-[3.5rem] mb-4">Experience</h2>
                <div class="flex flex-col sm:flex-row w-[95%]">
                    <div class="mr-auto">
                    	<h3 class="text-[1.75rem] mb-0">Coding Instructor</h3>
                      	<div class="mb-3 text-[1rem] text-[var(--main-text-color)]">iCode | Bellevue, WA</div>
                    </div>
                    <div>
                      <span class="font-normal text-[var(--main-color)] text-[1.1rem]">November 2024 - February 2025</span>
                    </div>
                </div>
				<ul class="experience-list">
					<li>
						Teaching over 20 students foundational programming concepts and basic software practices through JavaScript, HTML, CSS, and Python.
					</li>
					<li>
						Collaborating with other instructors to adapt and teach curriculum from corporate, to address the needs of different students and classes.
					</li>
					<li>
						Writing worksheets and exercises for students to practice and retain learned material outside of class.
					</li>
				</ul>

				<div class="flex flex-col sm:flex-row w-[95%]">
                    <div class="mr-auto">
                    	<h3 class="text-[1.75rem] mb-0">Software Engineering Intern</h3>
                      	<div class="mb-3 text-[1rem] text-[var(--main-text-color)]">GoFundMe | San Diego, CA</div>
                    </div>
                    <div>
                      <span class="font-normal text-[var(--main-color)] text-[1.1rem]">July 2023 - September 2023</span>
                    </div>
                </div>
				<ul class="experience-list">
					<li>
						Worked with a senior engineer to implement a standardized event streaming protocol in Apache Kafka, 
						meant to serve machine learning and business intelligence teams for downstream analytics.
					</li>
					<li>
						Devloped a service named Eventer using FastAPI, used to publish and subscribe to registered events 
						within GoFundMe's main microservices, which included user and fundraising activity.
					</li>
					<li>
						Collaborated with microservice teams to implement event listeners in PHP and Laravel. 
						Ensured proper integration and deployment with PHPUnit.
					</li>
				</ul>

				<div class="flex flex-col sm:flex-row w-[95%]">
                    <div class="mr-auto">
                    	<h3 class="text-[1.75rem] mb-0">Software Intern</h3>
                      	<div class="mb-3 text-[1rem] text-[var(--main-text-color)]">VoLo Foundation | Remote</div>
                    </div>
                    <div>
                      <span class="font-normal text-[var(--main-color)] text-[1.1rem]">July 2022 - September 2022</span>
                    </div>
                </div>
				<ul class="experience-list">
					<li>
						Built a Flask app to centralize access to personal health data from various health wearables such as Dexcom Glucose Monitoring, Fitbit, and Oura Ring.
					</li>
					<li>
						Presented a live demo of the web app to the foundation’s leadership, receiving feedback for its functionality and design to plan for future changes to the app.
					</li>
				</ul>
            </div>

        </section>


		<section id="Projects" class="relative flex oswald-base w-full sm:max-w-[1280px] flex-col py-12 border-b border-gray-300">
            <div class="ml-6">
                <h2 class="text-[3.5rem] mb-4">Projects</h2>
				{#each Projects as project, i}
				<ProjectCard data={project}/>
				{/each}

            </div>

        </section>


        <section id="Education" class="relative flex oswald-base w-full sm:max-w-[1280px] flex-col py-12 border-b border-gray-300">
            <div class="ml-6">
                <h2 class="text-[3.5rem] mb-4">Education</h2>
                <div class="flex flex-col sm:flex-row w-[95%]">
                    <div class="mr-auto">
                      <h3 class="text-[1.75rem] mb-0">Bachelor of Science, Computer Science</h3>
                      <div class="mb-3 text-[1rem] text-[var(--main-text-color)]">University of California, San Diego | La Jolla, CA</div>
                    </div>
                    <div class="">
                      <span class="font-normal text-[var(--main-color)] text-[1.1rem]">September 2020 - March 2024</span>
                    </div>
                  </div>
            </div>

        </section>

		<section id="Skills" class="relative flex oswald-base w-full h-screen sm:max-w-[1280px] flex-col">
			<div class="ml-6 absolute top-1/2 chromefix">
                <h2 class="text-[3.5rem] mb-4">Skills</h2>
                <h4 class="text-[1.8rem] font-bold text-[var(--main-text-color)]">Programming Languages</h4>
				<ul class="text-[1.6rem] skill-list font-light text-[var(--main-text-color)]">
					<li >Python</li>
					<li>Typescript</li>
					<li>C++</li>
					<li>C#</li>
					<li>PHP</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>Java</li>
					<li>SQL</li>
					<li>CUDA</li>
				</ul>

				<h4 class="text-[1.8rem] font-bold text-[var(--main-text-color)]">Frameworks and Libraries</h4>
				<ul class="text-[1.6rem] skill-list font-light text-[var(--main-text-color)]">
					<li>Next.js</li>
					<li>SvelteKit</li>
					<li>React</li>
					<li>Tailwind</li>
					<li>Flutter</li>
					<li>FastAPI</li>
					<li>scikit-learn</li>
					<li>NumPy</li>
					<li>Selenium</li>
					<li>BeautifulSoup</li>
				</ul>

				<h4 class="text-[1.8rem] font-bold text-[var(--main-text-color)]">Technologies</h4>
				<ul class="text-[1.6rem] skill-list font-light text-[var(--main-text-color)]">
					<li>Git</li>
					<li>AWS</li>
					<li>Google Cloud Platform</li>
					<li>Kafka</li>
					<li>Docker</li>
					<li>Supabase</li>
					<li>MySQL</li>
					<li>Firebase</li>
					<li>MongoDB</li>
					<li>Unity</li>
					<li>Godot</li>
				</ul>
            </div>
		</section>

        
        
	</div>
</div>