<script>
  import WritingsSectionItem from "$lib/components/WritingsSectionItem.svelte";
  import {
    API_ARCHITECTURE_BLOGS,
    TESTING_ARCHITECTURE_BLOGS,
    WEB_APP_ARCHITECTURE_BLOGS,
  } from "$lib/constants/blogs/software/architectureBlogs.js";
  import {
    DATABASE_THEORY_BLOGS,
    MEMORY_DATABASE_THEORY_BLOGS,
    NO_SQL_DATABASE_THEORY_BLOGS,
    RELATIONAL_DATABASE_THEORY_BLOGS,
  } from "$lib/constants/blogs/software/databaseBlogs.js";
  import { REACT_BLOGS } from "$lib/constants/blogs/software/frontEndBlogs.js";
  import {
    DEVELOPER_SETUP_BLOGS,
    DEVELOPER_TOOLS_BLOGS,
    POSTMAN_SERIES,
  } from "$lib/constants/blogs/software/generalBlogs.js";
  import { NODE_BLOGS, PYTHON_BLOGS } from "$lib/constants/blogs/software/backEndBlogs.js";

  const generalCategories = [
    {
      title: "Developer Setup",
      blogs: DEVELOPER_SETUP_BLOGS,
    },
    {
      title: "Developer Tools",
      blogs: DEVELOPER_TOOLS_BLOGS,
    },
    {
      title: "Postman",
      blogs: POSTMAN_SERIES,
    },
  ];

  const architectureCategories = [
    {
      title: "Web Apps",
      blogs: WEB_APP_ARCHITECTURE_BLOGS,
    },
    {
      title: "APIs",
      blogs: API_ARCHITECTURE_BLOGS,
    },
    {
      title: "Testing",
      blogs: TESTING_ARCHITECTURE_BLOGS,
    },
  ];

  const frontEndCategories = [
    {
      title: "React",
      blogs: REACT_BLOGS,
    },
  ];

  const backEndCategories = [
    {
      title: "Node",
      blogs: NODE_BLOGS,
    },
    {
      title: "Python",
      blogs: PYTHON_BLOGS,
    },
  ];

  const databaseCategories = [
    {
      title: "Database Design",
      blogs: DATABASE_THEORY_BLOGS,
    },
    {
      title: "Relational Databases",
      blogs: RELATIONAL_DATABASE_THEORY_BLOGS,
    },
    {
      title: "NoSQL Databases",
      blogs: NO_SQL_DATABASE_THEORY_BLOGS,
    },
    {
      title: "Memory Databases",
      blogs: MEMORY_DATABASE_THEORY_BLOGS,
    },
  ];
</script>

<WritingsSectionItem title="General" categories={generalCategories} />
<WritingsSectionItem title="Architecture" categories={architectureCategories} />
<WritingsSectionItem title="Front End" categories={frontEndCategories} />
<WritingsSectionItem title="Back End" categories={backEndCategories} />
<WritingsSectionItem title="Database" categories={databaseCategories} />
