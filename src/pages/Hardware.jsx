import React from "react";
import RootLayout from "../components/RootLayout";
import { ALL_BLOGS } from "../data/ALL_BLOGS";
import SectionItem from "../components/Home/SectionItem";

export default function HardwarePage() {
  const hardwareBlogs = ALL_BLOGS.filter(blog => blog.type === "hardware");
    
  return (
    <RootLayout>
      <SectionItem 
        title="Hardware" 
        blogs={hardwareBlogs} 
      />
    </RootLayout>
  );
}
