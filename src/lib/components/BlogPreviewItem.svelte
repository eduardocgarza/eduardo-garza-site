<script>
  let { blog } = $props();
</script>

<a
  href={blog.url}
  rel="noreferrer"
  target="_blank"
  class="my-2 mb-1 block border-l-2 border-black pl-2 transition duration-300 ease-in-out hover:border-yellow-500 hover:underline"
>
  <h2 class="text-[15px] text-gray-900">{blog.title}</h2>
</a>
