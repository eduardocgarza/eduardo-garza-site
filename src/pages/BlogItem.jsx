import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import RootLayout from '../components/RootLayout';
import { ALL_BLOGS } from '../data/ALL_BLOGS';
import styled from "styled-components"

export default function BlogItem() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogMetadata, setBlogMetadata] = useState(null);

  useEffect(() => {
    const blogObject = ALL_BLOGS.find(blog => blog.slug === slug);
    setBlogMetadata(blogObject);

    const fileName = blogObject.fileName;
    const fullPath = `../data/content/${fileName}`
    
    import(fullPath)
      .then(res => {
        fetch(res.default)
        .then(res => res.text())
        .then(markdownAsText => setBlog(markdownAsText))
      })
  })
  

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
