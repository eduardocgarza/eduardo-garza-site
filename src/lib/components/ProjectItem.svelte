<script>
  import { ChevronDown, ChevronUp } from "@lucide/svelte";
  import { cubicInOut } from "svelte/easing";
  import { slide } from "svelte/transition";
  import HighlightedText from "$lib/components/HighlightedText.svelte";
  import ProjectBulletList from "$lib/components/ProjectBulletList.svelte";
  import ProjectButtonBlue from "$lib/components/ProjectButtonBlue.svelte";
  import ProjectButtonRed from "$lib/components/ProjectButtonRed.svelte";
  import ProjectVideoEmbed from "$lib/components/ProjectVideoEmbed.svelte";

  let { project } = $props();
  let detailsVisible = $state(false);

  const hasDetails = $derived(
    Boolean(project?.bulletPoints?.length || project?.bulletPointSections?.length),
  );
  const detailsId = $derived(
    `project-${project?.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-details`,
  );
  const videoURLs = $derived(project?.videoURLs?.filter(Boolean) ?? []);

  function isYoutubeVideoURL(value = "") {
    try {
      const hostname = new URL(value).hostname;

      return hostname.includes("youtube.com") || hostname.includes("youtube-nocookie.com") || hostname.includes("youtu.be");
    } catch {
      return false;
    }
  }

  function getCoordinatedFrameURL(value = "") {
    try {
      const url = new URL(value);
      url.searchParams.set("coordination", "1");

      return url.toString();
    } catch {
      return value;
    }
  }
</script>

{#if project?.title}
  <section class="mb-10">
    <section class="rounded-2xl border border-gray-200 p-6 shadow-sm">
      <section class="flex flex-col md:flex-row">
        {#if project.imagePath}
          <section class="flex items-center justify-center md:items-start md:py-4">
            <img src={project.imagePath} alt={project.title} class="block w-[50px] rounded-full" />
          </section>
        {/if}

        <section class="ml-6 flex-1">
          <header class="mb-2 text-center md:text-left">
            <h2 class="text-medium text-[20px] font-medium">{project.title}</h2>
            <p class="text-[14px] text-sm text-gray-500">{project.description}</p>
          </header>

          {#if project.tools}
            <section class="mb-2 flex flex-wrap justify-center md:justify-start">
              {#each project.tools as toolName (toolName)}
                <p
                  class="mb-2 mr-1 cursor-pointer rounded-full border border-gray-200 bg-white px-2 py-1 text-xs text-gray-700 transition duration-500 ease-in-out hover:bg-gray-50"
                >
                  {toolName}
                </p>
              {/each}
            </section>
          {/if}

          <section class="flex items-center justify-center md:justify-stretch">
            {#if project.detailsURL}
              <a
                class="mr-2 inline-flex items-center rounded-full bg-gray-900 px-3 py-2 text-xs text-white transition duration-200 hover:bg-gray-700"
                href={project.detailsURL}
              >
                <span>{project.detailsLabel || "View archive"}</span>
              </a>
            {/if}
            {#if project.repositoryURL}
              <ProjectButtonRed url={project.repositoryURL} />
            {/if}
            {#if project.demoURL}
              <ProjectButtonBlue url={project.demoURL} />
            {/if}
          </section>

          {#if project.detailsURL && project.previewImagePaths?.length > 0}
            <a class="mt-4 flex flex-wrap justify-center gap-2 md:justify-start" href={project.detailsURL}>
              {#each project.previewImagePaths as previewImagePath, index (previewImagePath)}
                <img
                  alt={`${project.title} preview ${index + 1}`}
                  class="h-14 w-14 rounded-xl object-cover shadow-sm transition duration-200 hover:scale-[1.03]"
                  src={previewImagePath}
                />
              {/each}
            </a>
          {/if}
        </section>
      </section>

      <section class="mt-4 text-center md:text-left">
        <p class="text-[14.5px] leading-[200%] text-gray-900">
          <HighlightedText text={project.extendedDescription} highlightTerms={project.highlightTerms || []} />
        </p>

        {#if hasDetails}
          <button
            aria-controls={detailsId}
            aria-expanded={detailsVisible}
            class="mt-2 flex w-full items-center justify-center gap-1 py-3 text-center text-xs font-medium uppercase tracking-wide text-gray-500 transition-colors duration-200 hover:text-gray-700 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
            type="button"
            onclick={() => (detailsVisible = !detailsVisible)}
          >
            <span>{detailsVisible ? "Hide details" : "Show details"}</span>
            {#if detailsVisible}
              <ChevronUp aria-hidden="true" size={14} strokeWidth={2} />
            {:else}
              <ChevronDown aria-hidden="true" size={14} strokeWidth={2} />
            {/if}
          </button>

          {#if detailsVisible}
            <section id={detailsId} transition:slide={{ duration: 500, easing: cubicInOut }}>
              <ProjectBulletList
                bulletPoints={project.bulletPoints || []}
                className=""
                highlightTerms={project.highlightTerms || []}
              />

              {#if project.bulletPointSections?.length}
                <section class="space-y-3">
                  {#each project.bulletPointSections as bulletPointSection (bulletPointSection.title)}
                    <section>
                      <h3 class="mb-1 text-[11px] font-semibold uppercase text-gray-400">
                        {bulletPointSection.title}
                      </h3>
                      <ProjectBulletList
                        bulletPoints={bulletPointSection.items}
                        className=""
                        highlightTerms={project.highlightTerms || []}
                      />
                    </section>
                  {/each}
                </section>
              {/if}
            </section>
          {/if}
        {/if}
      </section>
    </section>

    {#if videoURLs.length > 0}
      {#each videoURLs as videoURL, index (videoURL)}
        <section class="mt-10 flex items-center justify-center">
          {#if isYoutubeVideoURL(videoURL)}
            <ProjectVideoEmbed src={videoURL} title={`${project.title} ${index + 1}`} />
          {:else}
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              class="aspect-video w-full max-w-[560px] rounded-2xl transition-[height] duration-200 ease-in-out"
              data-sdv-frame="1"
              loading="lazy"
              referrerpolicy="strict-origin-when-cross-origin"
              src={getCoordinatedFrameURL(videoURL)}
              title={`${project.title} ${index + 1}`}
            ></iframe>
          {/if}
        </section>
      {/each}
    {/if}
  </section>
{/if}
