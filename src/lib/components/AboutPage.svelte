<script>
  import { RESUME_URL } from "$lib/data/links.js";
  import {
    aboutMe,
    hiddenWorkExperienceCompanies,
    skillSections,
    workExperience,
  } from "$lib/data/about.js";

  const visibleWorkExperience = workExperience.filter(
    (item) => !hiddenWorkExperienceCompanies.has(item.company),
  );
</script>

<section class="py-14">
  <section class="mb-14">
    <h2 class="mb-4 font-libreBaskerville text-[28px]">About</h2>
    {#each aboutMe as item (item.label)}
      <li class="mb-3 mt-2 text-[16px] text-gray-900">
        <span class="font-medium">{item.label}:</span>
        <span>{item.text}</span>
      </li>
    {/each}
  </section>

  <section class="mb-14">
    <h2 class="mb-4 font-libreBaskerville text-[28px]">Work Experience</h2>
    <p class="mb-4 mt-2 text-[16px] text-gray-900">
      Full work experience on
      <a
        class="text-md text-blue-600 underline hover:text-blue:800"
        href="https://www.linkedin.com/in/eduardocgarza"
        rel="noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
    </p>
    <div>
      {#each visibleWorkExperience as item (`${item.role}-${item.company}`)}
        <div class="mb-6 mt-2 border-l border-l-gray-300 pl-4 text-[16px] text-gray-900">
          <div class="flex gap-x-1.5">
            <span class="font-medium">{item.role}</span>
            <span>at</span>
            <a class="flex font-medium no-underline" href={item.url} rel="noreferrer" target="_blank">
              {item.company}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          </div>
          <div class="mb-1 text-[15px] text-gray-500">{item.dates}</div>
          <p class="block text-[15px] leading-[175%] text-gray-900">{item.description}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="mb-14">
    <h2 class="mb-4 font-libreBaskerville text-[28px]">Skills</h2>
    <p class="mb-4 mt-2 text-[16px] text-gray-900">
      All skills on
      <a
        class="text-md text-blue-600 underline hover:text-blue:800"
        href={RESUME_URL}
        rel="noreferrer"
        target="_blank"
      >
        resume
      </a>
    </p>
    <div>
      {#each skillSections as section (section.title)}
        <section class="mb-8">
          <img
            alt={`${section.title} icon`}
            class="mb-3"
            height={section.iconSize || 50}
            src={section.icon}
            style={`height: ${section.iconSize || 50}px; width: ${section.iconSize || 50}px;`}
            width={section.iconSize || 50}
          />
          <h3 class="mb-2 mt-2 text-[16px] font-medium uppercase text-gray-500">{section.title}</h3>
          {#each section.items as item, index (`${section.title}-${item.label || item.text}-${index}`)}
            <li class="mb-3 mt-2 text-[16px] text-gray-900">
              {#if item.label}
                <span class="font-medium">{item.label}:</span>
                <span>{item.text}</span>
              {:else}
                {item.text}
              {/if}
            </li>
          {/each}
        </section>
      {/each}
    </div>
  </section>
</section>
