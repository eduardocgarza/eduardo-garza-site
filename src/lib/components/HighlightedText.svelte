<script>
  let { highlightTerms = [], text = "" } = $props();

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getParts(value, termsToHighlight) {
    if (!termsToHighlight.length) {
      return [{ highlighted: false, value }];
    }

    const terms = [...termsToHighlight].sort((a, b) => b.length - a.length);
    const termSet = new Set(terms);
    const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "g");

    return value.split(pattern).map((part) => ({
      highlighted: termSet.has(part),
      value: part,
    }));
  }

  const parts = $derived(getParts(text, highlightTerms));
</script>

{#each parts as part, index (`${part.value}-${index}`)}
  {#if part.highlighted}
    <strong class="font-medium text-gray-950">{part.value}</strong>
  {:else}
    {part.value}
  {/if}
{/each}
