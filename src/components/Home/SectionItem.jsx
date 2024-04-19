import React from "react";
import BlogPreviewItem from "./BlogPreviewItem";


export default function SectionItem(props) {
  const {blogs} = props;
  if (blogs.length === 0) return null;

  return (
    <section className="mt-4 mb-8">
      <h2 className="text-lg font-medium mb-2">{props.title}</h2>
      <section>
        {blogs && blogs.map((blog) => (
          <BlogPreviewItem key={blog.slug} blog={blog} />
        ))}
      </section>
      <footer className="flex justify-center items-center">
        <div className="my-4 border-2 w-1/2 border-b border-blue-500 rounded-full"></div>
      </footer>
    </section>
  );
}
