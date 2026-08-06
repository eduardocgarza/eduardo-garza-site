<script>
  import CategoryItem from "$lib/components/CategoryItem.svelte";
  import SectionBadge from "$lib/components/SectionBadge.svelte";

  let { categories = [], title } = $props();
</script>

{#if categories.length > 0}
  <section class="mb-6">
    <SectionBadge {title} />
    {#each categories as categoryItem (categoryItem.title)}
      <CategoryItem title={categoryItem.title} blogs={categoryItem.blogs} />
    {/each}
  </section>
{/if}
