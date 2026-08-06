<script>
  let { url } = $props();
</script>

<a
  class="mr-2 flex items-center rounded-full bg-blue-600 px-2 py-1.5 text-xs text-white"
  href={url}
  rel="noreferrer"
  target="_blank"
>
  <img src="/assets/icons/icon-play.png" alt="" class="mr-2 block h-[15px] w-[15px]" />
  <span>Try demo</span>
</a>
