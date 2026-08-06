<script>
  import "../app.css";
  import MainNav from "$lib/components/MainNav.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <title>Eduardo Garza - Vancouver, Canada</title>
  <meta name="description" content="Eduardo Garza - Portfolio - Vancouver, Canada" />
</svelte:head>

<section>
  <MainNav />
  <div class="mx-auto max-w-[750px] px-2 md:min-w-[600px]">
    {@render children()}
  </div>
</section>
