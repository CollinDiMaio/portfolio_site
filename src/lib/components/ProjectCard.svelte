<script lang="ts">
    import type { Project } from '$lib/data/projects';

    let { project }: { project: Project } = $props();
</script>

<div class="card">
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

