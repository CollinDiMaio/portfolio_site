<script>
    import { projects } from '$lib/data/projects';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>


<div class="flex justify-center my-8">
    <div>
        <h1 class="text-3xl font-semibold">Collin DiMaio</h1>
        <h3 class="text-lg">Software Engineer</h3>
        <p class=""><a href="https://github.com/CollinDiMaio" class="text-cyan-400 hover:text-cyan-500">Github</a> | <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/cdimai6" class="text-amber-500 hover:text-amber-600">Gitlab</a> | dimaiocollin@gmail.com</p>
    </div>
</div>

<div class="flex gap-6 flex-wrap justify-evenly">
    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
