import React from "react";

export default function BlogPreviewItem(props) {
  const { blog } = props;

  return (
    <a
      href={blog.url}
      rel="noreferrer"
      target="_blank"
      className="block mb-1 border-l-2 border-black pl-2 my-2 hover:underline hover:border-yellow-500 transition duration-300 ease-in-out"
    >
      <h2 className="text-xs">{blog.title}</h2>
    </a>
  );
}
