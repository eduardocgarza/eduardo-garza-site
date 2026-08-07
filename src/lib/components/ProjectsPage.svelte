<script>
  import ProjectItem from "$lib/components/ProjectItem.svelte";
  import { ALL_PROJECTS } from "$lib/data/projects/allProjects.js";

  const visibleProjects = ALL_PROJECTS.filter((project) => !project.hidden);
</script>

<section class="mb-8 mt-10">
  {#each visibleProjects as project (project.title)}
    <ProjectItem {project} />
  {/each}
</section>
