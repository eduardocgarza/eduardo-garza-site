import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import RootLayout from "../components/RootLayout";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ALL_BLOGS } from "../constants/ALL_BLOGS";

export default function BlogItem() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogMetadata, setBlogMetadata] = useState(null);

  console.log("New");

  useEffect(() => {
    const fetchBlogContent = async () => {
      const blogObject = ALL_BLOGS.find((blog) => blog.slug === slug);
      const fileName = blogObject.fileName;

      // Dynamically import the markdown file
      const markdownFile = await import(`../constants/content/${fileName}`);
      
      // Read the content from the imported markdown file
      const response = await fetch(markdownFile.default);
      const markdownContent = await response.text();
      
      setBlog(markdownContent);
    };

    fetchBlogContent();
  }, []);

  if (!blog) {
    return <RootLayout>Loading...</RootLayout>;
  }

  const MarkdownWrapper = styled.div`
    padding-top: 40px;

    > * {
      font-size: 13px;
      line-height: 1.8;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 15px;
      font-weight: bold;
    }
  `;

  return (
    <RootLayout>
      <MarkdownWrapper>
        <ReactMarkdown>{blog}</ReactMarkdown>
      </MarkdownWrapper>
    </RootLayout>
  );
}
