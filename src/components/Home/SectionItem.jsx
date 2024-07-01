import React, { useState } from "react";
import BlogPreviewItem from "./BlogPreviewItem";
import { REACT_BLOGS } from "../../constants/blogs/frontEndBlogs";
import { NODE_BLOGS, PYTHON_BLOGS } from "../../constants/blogs/backEndBlogs";
import { ARCHITECTURE_BLOGS } from "../../constants/blogs/architectureBlogs";
import { DATABASE_THEORY_BLOGS } from "../../constants/blogs/databaseBlogs";

function HeaderButton(props) {
  const { title, blogType, blogState, setState } = props;

  return (
    <button
      className={`mr-2 py-2 px-4 text-sm border-2 rounded-full border-blue-600 ${
        blogState === blogType
          ? "bg-blue-600 text-white"
          : "bg-white text-blue-600"
      }`}
    >
      {title}
    </button>
  );
}

function SectionBadge(props) {
  const { title } = props;

  return (
    <h3 className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-2">
      {title}
    </h3>
  );
}

function SectionCategoryBadge(props) {
  const { title } = props;
  return (
    <h4 className="text-xs bg-purple-600 text-white px-3 py-1 rounded-full inline-block mb-2">
      {title}
    </h4>
  );
}

export default function SectionItem(props) {
  const blogItems = {
    hardware: "hardware",
    software: "software",
  };
  const [blogActive, setBlogActive] = useState(blogItems.software);

  const { blogs } = props;
  if (blogs.length === 0) return null;

  return (
    <section className="mt-4 mb-8">
      <header className="mb-6">
        <HeaderButton
          title="Software Blog"
          blogState={blogActive}
          blogType={blogItems.software}
          key="Software"
        />
        <HeaderButton
          title="Hardware Blog"
          blogState={blogActive}
          blogType={blogItems.hardware}
          key="Hardware"
        />
      </header>

      <section className="mb-6">
        <SectionBadge title="Architecture" />
        {ARCHITECTURE_BLOGS.map((blog) => (
          <BlogPreviewItem key={blog.slug} blog={blog} />
        ))}
      </section>

      <section className="mb-6">
        <SectionBadge title="Front-End" />
        <section className="mb-4">
          <SectionCategoryBadge title="React" />
          {REACT_BLOGS.map((blog) => (
            <BlogPreviewItem key={blog.slug} blog={blog} />
          ))}
        </section>
      </section>

      <section className="mb-6">
        <SectionBadge title="Back-End" />
        <section className="mb-4">
          <SectionCategoryBadge title="Node" />
          {NODE_BLOGS.map((blog) => (
            <BlogPreviewItem key={blog.slug} blog={blog} />
          ))}
        </section>
        <section className="mb-4">
          <SectionCategoryBadge title="Python" />
          {PYTHON_BLOGS.map((blog) => (
            <BlogPreviewItem key={blog.slug} blog={blog} />
          ))}
        </section>
      </section>

      <section className="mb-6">
        <SectionBadge title="Database" />
        {DATABASE_THEORY_BLOGS.map((blog) => (
          <BlogPreviewItem key={blog.slug} blog={blog} />
        ))}
      </section>

      <footer className="flex justify-center items-center">
        <div className="my-4 border-2 w-1/2 border-b border-blue-500 rounded-full"></div>
      </footer>
    </section>
  );
}
