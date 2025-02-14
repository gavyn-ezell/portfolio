<script>
	let { data } = $props();
    import { Menu, Github, Linkedin, ExternalLink } from 'lucide-svelte';

</script>

<style>
    ul {
        list-style-type:disc;
        margin-left:22px;
        color: var(--main-text-color);
        font-weight: 300;
        font-size: 1.4rem;
    }
</style>

<div class="flex flex-col sm:flex-row w-[95%] items-center sm:items-end justify-start gap-16 mb-32">
    <div class="w-[90%] sm:w-[70%]">
        <h3 class="text-[1.75rem] mb-0">{data.title}</h3>
        <div class="mb-3 text-[1rem] text-[var(--main-text-color)]">{data.type}</div>
        <div class="mb-8 text-[1rem] text-[var(--main-text-color)]">
            <p>
                {#each data.skills as skill, i}
                    {skill}
                {/each}
            </p>
        </div>
        <div class="flex flex-row gap-4 mb-8">
            {#if data.github}
            <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                <a href={data.github} target="_blank">
                    <Github fill="white" class="border" color="white" size="36"/>
                </a>
            </div>
            {/if}
            {#if data.site}
            <div class="p-2 bg border-4 border-[#343A40] bg-[#343A40] rounded-full inline-flex">
                <a href={data.site} target="_blank">
                    <ExternalLink class="border" color="white" size="36"/>
                </a>
            </div>
            {/if}
        </div>
        <ul >
            {#each data.bullets as bullet, i}
                    <li>{bullet}</li>
            {/each}
        </ul>

    </div>
    <div class="w-80 aspect-square rounded-sm border border-gray-300">
        <img src={data.gif} class="w-full h-full rounded-sm" alt="gif"/>
    </div>
</div>