<script>
  import HighlightedText from "$lib/components/HighlightedText.svelte";

  let { bulletPoints = [], className = "mt-2", highlightTerms = [] } = $props();
</script>

{#if bulletPoints.length}
  <ul class={`${className} list-inside list-disc text-[14.5px] leading-[200%] text-gray-900`}>
    {#each bulletPoints as bulletPoint (bulletPoint)}
      <li>
        <HighlightedText text={bulletPoint} {highlightTerms} />
      </li>
    {/each}
  </ul>
{/if}
