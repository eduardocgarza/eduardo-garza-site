<script>
  let { url } = $props();
</script>

<a
  class="mr-2 flex items-center rounded-full bg-red-500 px-2 py-1.5 text-xs text-white"
  href={url}
  rel="noreferrer"
  target="_blank"
>
  <img src="/assets/icons/icon-code.png" alt="" class="mr-2 block h-[15px] w-[15px]" />
  <span>View code</span>
</a>
