<script>
  import { Play } from "@lucide/svelte";

  let { src, title } = $props();

  let isActive = $state(false);
  let hasFrameLoaded = $state(false);

  const youtubeVideoId = $derived(getYoutubeVideoId(src));
  const providerName = $derived(youtubeVideoId ? "YouTube" : src?.includes("loom.com") ? "Loom" : "Video");
  const thumbnailURL = $derived(
    youtubeVideoId ? `https://img.youtube.com/vi/${youtubeVideoId}/hqdefault.jpg` : "",
  );
  const playableSrc = $derived(isActive ? getPlayableSrc(src) : "");

  function getYoutubeVideoId(value = "") {
    try {
      const url = new URL(value);

      if (url.hostname.includes("youtu.be")) {
        return url.pathname.split("/").filter(Boolean)[0] || "";
      }

      if (!url.hostname.includes("youtube.com")) {
        return "";
      }

      if (url.pathname.startsWith("/embed/")) {
        return url.pathname.split("/").filter(Boolean)[1] || "";
      }

      return url.searchParams.get("v") || "";
    } catch {
      return "";
    }
  }

  function getPlayableSrc(value = "") {
    try {
      const url = new URL(value);
      url.searchParams.set("autoplay", "1");

      return url.toString();
    } catch {
      return value;
    }
  }

  function loadVideo() {
    isActive = true;
  }
</script>

<div class="relative aspect-video w-full max-w-[560px] overflow-hidden rounded-2xl bg-gray-950 shadow-sm">
  {#if isActive}
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      class={`absolute inset-0 h-full w-full transition-opacity duration-200 ${
        hasFrameLoaded ? "opacity-100" : "opacity-0"
      }`}
      loading="lazy"
      onload={() => (hasFrameLoaded = true)}
      referrerpolicy="strict-origin-when-cross-origin"
      src={playableSrc}
      title={title}
    ></iframe>
  {/if}

  {#if !isActive || !hasFrameLoaded}
    <button
      aria-label={`Load ${title}`}
      class={`group absolute inset-0 block h-full w-full overflow-hidden bg-gray-950 text-left focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 ${
        isActive ? "cursor-wait" : "cursor-pointer"
      }`}
      disabled={isActive}
      onclick={loadVideo}
      type="button"
    >
      {#if thumbnailURL}
        <img
          alt=""
          class="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-200 group-hover:scale-[1.02]"
          decoding="async"
          loading="lazy"
          src={thumbnailURL}
        />
        <span
          aria-hidden="true"
          class="absolute inset-0 bg-black/25 transition duration-200 group-hover:bg-black/15"
        ></span>
      {:else}
        <span aria-hidden="true" class="absolute inset-0 bg-gray-950"></span>
        <span aria-hidden="true" class="absolute inset-x-0 top-0 h-1 bg-red-500"></span>
      {/if}

      <span class="relative z-10 flex h-full w-full items-center justify-center">
        <span
          class="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-gray-950 shadow-lg transition duration-200 group-hover:scale-105 group-hover:bg-white"
        >
          <Play aria-hidden="true" class="h-7 w-7 translate-x-0.5 fill-current" />
        </span>
      </span>

      <span
        class="absolute bottom-3 left-3 z-10 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
      >
        {isActive ? "Loading video" : providerName}
      </span>
    </button>
  {/if}
</div>
