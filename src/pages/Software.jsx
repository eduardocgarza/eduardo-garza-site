import React from "react";
import RootLayout from "../components/RootLayout";
import { ALL_BLOGS } from "../data/ALL_BLOGS";
import SectionItem from "../components/Home/SectionItem";

export default function SoftwarePage() {
  const softwareBlogs = ALL_BLOGS.filter(blog => blog.type === "software");
    
  return (
    <RootLayout>
      <SectionItem 
        title="Software" 
        blogs={softwareBlogs} 
      />
    </RootLayout>
  );
}
