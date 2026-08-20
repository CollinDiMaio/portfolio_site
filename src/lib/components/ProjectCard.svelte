<script lang="ts">
    import type { Project } from '$lib/data/projects';
    import placeholder from '$lib/assets/pexels-talal-10920328.jpg';

    let { project }: { project: Project } = $props();
</script>
<!--TODO: Style project cards-->
<div class="min-w-2xs max-w-s">
    <img src={project.image} alt={project.id} />

    <p class="project-title">{project.title}</p>

    <p class="project-desc">{project.description}</p>

    <div class="tag-box">
        {#each project.technologies as technology}
            <span class="technology-tag">{technology}</span>
        {/each}
        <span class="status-tag">{project.status}</span>
    </div>
</div>

