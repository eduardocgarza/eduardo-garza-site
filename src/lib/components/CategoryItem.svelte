<script>
  import BlogPreviewItem from "$lib/components/BlogPreviewItem.svelte";
  import SectionCategoryBadge from "$lib/components/SectionCategoryBadge.svelte";

  let { blogs = [], title } = $props();
</script>

{#if blogs.length > 0}
  <section class="mb-6">
    <SectionCategoryBadge {title} />
    {#each blogs as blog (blog.url || blog.title)}
      <BlogPreviewItem {blog} />
    {/each}
  </section>
{/if}
