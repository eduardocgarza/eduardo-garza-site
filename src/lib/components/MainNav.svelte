<script>
  import { page } from "$app/state";
  import { RESUME_URL } from "$lib/data/links.js";

  const isCurrentPath = (path) => page.url.pathname === path;
</script>

<section>
  <nav class="fixed left-0 top-0 z-40 w-full border-b border-b-gray-200 bg-white py-4 text-gray-900 md:h-[65px] md:py-0">
    <div class="mx-auto flex max-w-[750px] flex-col items-center justify-between px-2 md:h-[65px] md:min-w-[600px] md:flex-row">
      <a class="flex items-center font-libreBaskerville text-2xl" href="/">
        <span class="ml-3">Eduardo Garza</span>
      </a>
      <div class="flex pt-4 md:pt-0">
        <a
          class="ml-6 text-sm hover:underline"
          aria-current={isCurrentPath("/projects") ? "page" : undefined}
          href="/projects"
        >
          Projects
        </a>
        <a
          class="ml-6 flex items-center text-sm hover:underline"
          href={RESUME_URL}
          rel="noreferrer"
          target="_blank"
        >
          <span class="mr-2">Resume</span>
          <svg
            aria-hidden="true"
            class="block h-4 w-4 text-gray-800"
            data-slot="icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  </nav>
  <section class="pt-[115px] md:pt-[65px]"></section>
</section>
