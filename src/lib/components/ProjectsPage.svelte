<script>
  import ProjectItem from "$lib/components/ProjectItem.svelte";
  import { ALL_PROJECTS } from "$lib/data/projects/allProjects.js";
</script>

<section class="mb-8 mt-10">
  {#each ALL_PROJECTS as project (project.title)}
    <ProjectItem {project} />
  {/each}
</section>
