<script>
  import { ArrowLeft, ChevronLeft, ChevronRight, Minus, Plus, X } from "@lucide/svelte";
  import {
    getPreviewPath,
    getSlideNumber,
    mozartBlocks,
  } from "$lib/data/mozart.js";

  const MIN_ZOOM_LEVEL = 1;
  const MAX_ZOOM_LEVEL = 2.5;
  const MANUAL_ZOOM_STEP = 0.1;
  const SLIDER_ZOOM_STEP = 0.05;
  const WHEEL_ZOOM_STEP = 0.08;

  let selectedPhoto = $state(null);
  let zoomLevel = $state(MIN_ZOOM_LEVEL);

  const selectedPhotoPath = $derived(selectedPhoto?.photoPath);
  const selectedPhotoPaths = $derived(selectedPhoto?.photoPaths ?? []);
  const selectedRowHasMultiplePhotos = $derived(selectedPhotoPaths.length > 1);
  const canZoomIn = $derived(zoomLevel < MAX_ZOOM_LEVEL);
  const canZoomOut = $derived(zoomLevel > MIN_ZOOM_LEVEL);

  function clampZoomLevel(value) {
    const numericZoomLevel = Number(value);

    if (Number.isNaN(numericZoomLevel)) {
      return MIN_ZOOM_LEVEL;
    }

    return Math.min(MAX_ZOOM_LEVEL, Math.max(MIN_ZOOM_LEVEL, numericZoomLevel));
  }

  function openPhoto(photoPath, photoPaths) {
    selectedPhoto = { photoPath, photoPaths };
  }

  function closeModal() {
    selectedPhoto = null;
  }

  function goToRelativeSlide(direction) {
    if (!selectedPhoto) return;

    const currentIndex = selectedPhoto.photoPaths.indexOf(selectedPhoto.photoPath);

    if (currentIndex === -1) return;

    const nextIndex = (currentIndex + direction + selectedPhoto.photoPaths.length) % selectedPhoto.photoPaths.length;

    selectedPhoto = {
      photoPath: selectedPhoto.photoPaths[nextIndex],
      photoPaths: selectedPhoto.photoPaths,
    };
  }

  function setResolvedZoomLevel(nextZoomLevel) {
    const resolvedZoomLevel =
      typeof nextZoomLevel === "function" ? nextZoomLevel(zoomLevel) : nextZoomLevel;

    zoomLevel = clampZoomLevel(resolvedZoomLevel);
  }

  function zoomIn() {
    setResolvedZoomLevel((currentZoomLevel) => currentZoomLevel + MANUAL_ZOOM_STEP);
  }

  function zoomOut() {
    setResolvedZoomLevel((currentZoomLevel) => currentZoomLevel - MANUAL_ZOOM_STEP);
  }

  function handleImageWheel(event) {
    event.preventDefault();
    event.stopPropagation();

    setResolvedZoomLevel((currentZoomLevel) =>
      event.deltaY < 0 ? currentZoomLevel + WHEEL_ZOOM_STEP : currentZoomLevel - WHEEL_ZOOM_STEP,
    );
  }

  $effect(() => {
    selectedPhotoPath;
    zoomLevel = MIN_ZOOM_LEVEL;
  });

  $effect(() => {
    if (!selectedPhoto) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        goToRelativeSlide(-1);
      }

      if (event.key === "ArrowRight") {
        goToRelativeSlide(1);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  });
</script>

<svelte:head>
  <title>Mozart - Eduardo Garza</title>
  <meta name="description" content="Mozart project archive by Eduardo Garza" />
</svelte:head>

<article class="mb-16 mt-10">
  <a class="inline-flex text-sm text-gray-600 hover:text-gray-950 hover:underline" href="/projects">
    <ArrowLeft aria-hidden="true" class="h-4 w-4" />
    <span class="ml-2">Back to projects</span>
  </a>

  <header class="mb-10 mt-8">
    <p class="mb-2 text-xs font-medium uppercase text-gray-500">COMPANY STORY</p>
    <h1 class="font-libreBaskerville text-[36px] leading-tight text-gray-950">Mozart</h1>
  </header>

  {#each mozartBlocks as block, blockIndex (`${block.type}-${block.name || block.photoPath}-${blockIndex}`)}
    {#if block.type === "gallery"}
      <section aria-label={block.name} class="my-8">
        <h2 class="sr-only">{block.name}</h2>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {#each block.photoPaths as photoPath (photoPath)}
            {@const slideNumber = getSlideNumber(photoPath)}
            <button
              aria-label={slideNumber ? `Open Mozart photo ${slideNumber}` : "Open Mozart photo"}
              class="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100 shadow-sm transition duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
              onclick={() => openPhoto(photoPath, block.photoPaths)}
              type="button"
            >
              <img
                alt="Mozart project"
                class="h-full w-full object-cover"
                loading="lazy"
                src={getPreviewPath(photoPath)}
              />
              <span
                aria-hidden="true"
                class="absolute inset-0 bg-black/5 transition duration-200 hover:bg-black/10"
              ></span>
            </button>
          {/each}
        </div>
      </section>
    {:else if block.type === "paragraphs"}
      <section aria-label={block.name} class="my-10 space-y-4 text-[15px] leading-7 text-gray-700">
        <h2 class="sr-only">{block.name}</h2>
        {#each block.paragraphs as paragraph (paragraph)}
          <p>{paragraph}</p>
        {/each}
      </section>
    {:else if block.type === "headerPhoto"}
      <div class="flex w-full justify-center">
        <img
          alt="Mozart project"
          class="block h-auto w-[400px]"
          loading="lazy"
          src={block.photoPath}
        />
      </div>
    {/if}
  {/each}
</article>

{#if selectedPhotoPath}
  <div
    aria-label="Mozart photo"
    aria-modal="true"
    class="fixed inset-0 z-50 bg-black/80 px-4 py-6"
    role="dialog"
  >
    <button
      aria-label="Close photo backdrop"
      class="absolute inset-0 h-full w-full cursor-default bg-transparent"
      onclick={closeModal}
      type="button"
    ></button>

    <button
      aria-label="Close"
      class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
      onclick={closeModal}
      type="button"
    >
      <X aria-hidden="true" class="h-5 w-5" />
    </button>

    <div class="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 overflow-y-auto pt-10">
      <div class="flex w-full max-w-6xl flex-col items-center gap-4">
        <div class="flex w-full flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-center">
          <div class="relative inline-flex max-w-full overflow-hidden rounded-lg bg-black/10 shadow-2xl">
            <img
              alt="Mozart project"
              class="block max-h-[calc(100vh-280px)] max-w-full object-contain will-change-transform md:max-h-[calc(100vh-220px)]"
              onwheel={handleImageWheel}
              src={selectedPhotoPath}
              style={`transform: scale(${zoomLevel}); transition: transform 120ms linear;`}
            />

            {#if selectedRowHasMultiplePhotos}
              <div class="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
                <button
                  aria-label="Previous photo"
                  class="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onclick={() => goToRelativeSlide(-1)}
                  type="button"
                >
                  <ChevronLeft aria-hidden="true" class="h-6 w-6" />
                </button>

                <button
                  aria-label="Next photo"
                  class="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white shadow-sm backdrop-blur transition duration-200 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                  onclick={() => goToRelativeSlide(1)}
                  type="button"
                >
                  <ChevronRight aria-hidden="true" class="h-6 w-6" />
                </button>
              </div>
            {/if}
          </div>

          <div class="flex flex-row items-center gap-2 rounded-2xl bg-white/10 px-2 py-1.5 text-white shadow-sm backdrop-blur md:flex-col md:self-start md:px-1.5 md:py-2">
            <button
              aria-label="Zoom in"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!canZoomIn}
              onclick={zoomIn}
              type="button"
            >
              <Plus aria-hidden="true" class="h-4 w-4" />
            </button>

            <div class="relative flex h-8 w-24 items-center justify-center md:h-28 md:w-8">
              <input
                aria-label="Zoom"
                class="h-1.5 w-24 cursor-pointer appearance-none rounded-full bg-white/30 accent-white md:[transform:rotate(-90deg)]"
                max={MAX_ZOOM_LEVEL}
                min={MIN_ZOOM_LEVEL}
                oninput={(event) => setResolvedZoomLevel(Number(event.currentTarget.value))}
                step={SLIDER_ZOOM_STEP}
                type="range"
                value={zoomLevel}
              />
            </div>

            <button
              aria-label="Zoom out"
              class="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-200 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-40"
              disabled={!canZoomOut}
              onclick={zoomOut}
              type="button"
            >
              <Minus aria-hidden="true" class="h-4 w-4" />
            </button>
          </div>
        </div>

        {#if selectedRowHasMultiplePhotos}
          <div class="grid max-w-full grid-cols-[repeat(auto-fit,minmax(3rem,3rem))] justify-center gap-2 p-1 sm:grid-cols-[repeat(auto-fit,minmax(3.5rem,3.5rem))]">
            {#each selectedPhotoPaths as photoPath (photoPath)}
              {@const slideNumber = getSlideNumber(photoPath)}
              {@const isActive = selectedPhotoPath === photoPath}
              <button
                aria-label={slideNumber ? `Open Mozart photo ${slideNumber}` : "Open Mozart photo"}
                class={`h-12 w-12 overflow-hidden rounded bg-white/10 transition duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black sm:h-14 sm:w-14 ${
                  isActive ? "ring-2 ring-white" : ""
                }`}
                onclick={() => openPhoto(photoPath, selectedPhotoPaths)}
                type="button"
              >
                <img
                  alt="Mozart project"
                  class="h-full w-full object-cover"
                  src={getPreviewPath(photoPath)}
                />
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}
