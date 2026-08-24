<script lang="ts">
    import type { Project } from '$lib/data/projects';

    let { project }: { project: Project } = $props();
</script>
<!--TODO: Style project cards-->
<div class="w-1/4 h-64">
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

