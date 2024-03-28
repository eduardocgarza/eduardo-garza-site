import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import RootLayout from "../components/RootLayout";
import { useParams } from "react-router-dom";
import { ALL_BLOGS } from "../constants/ALL_BLOGS";

export default function BlogItem() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogContent = async () => {
      try {
        const blogObject = ALL_BLOGS.find((blog) => blog.slug === slug);
        const fileName = blogObject.fileName;

        // Dynamically import the markdown file
        const markdownFile = await import(`../constants/content/${fileName}`);

        // Read the content from the imported markdown file
        const response = await fetch(markdownFile.default);
        const markdownContent = await response.text();

        setBlog(markdownContent);
      } catch (error) {
        console.error("Error fetching blog content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogContent();
  }, [slug]);

  if (loading) {
    return <RootLayout>Loading...</RootLayout>;
  }

  if (!blog) {
    return <RootLayout>Blog not found</RootLayout>;
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
