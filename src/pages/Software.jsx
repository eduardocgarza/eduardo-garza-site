import React from "react";
import RootLayout from "../components/RootLayout";
import SectionItem from "../components/Home/SectionItem";
import { ALL_BLOGS } from "../constants/ALL_BLOGS";

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
