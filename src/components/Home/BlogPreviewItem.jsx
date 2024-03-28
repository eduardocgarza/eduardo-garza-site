import React from "react";
import { Link } from "react-router-dom";

export default function BlogPreviewItem(props) {
  const { blog } = props;

  console.log(blog);

  return (
    <Link
      to={`/blog/${blog.id}`}
      className="block border-l border-l-4 border-gray-300 hover:border-yellow-400 mb-2 p-2 pointer transition duration-500 ease-in-out"
    >
      <div className="block md:flex text-gray-500 mb-1">
        <p className="text-xs mr-2">
          {new Date(blog.datePublished).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <h2 className="text-sm font-medium">{blog.title}</h2>
      <p className="text-gray-500 text-xs">{blog.shortDescription}</p>
    </Link>
  );
}
