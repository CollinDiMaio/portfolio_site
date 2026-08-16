<script>
    import { projects } from '$lib/data/projects';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>


<div class="header">
    <h1>Collin DiMaio</h1>
    <h3>Software Engineer</h3>
    <p><a href="https://github.com/CollinDiMaio">Github</a> | <a href="https://gitlab.com/wgu-gitlab-environment/student-repos/cdimai6">Gitlab</a> | dimaiocollin@gmail.com</p>
</div>

<div class="card-box">
    {#each projects as project}
        <ProjectCard {project} />
    {/each}
</div>
