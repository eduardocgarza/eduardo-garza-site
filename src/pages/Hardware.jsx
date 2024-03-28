import React from "react";
import RootLayout from "../components/RootLayout";
import SectionItem from "../components/Home/SectionItem";
import { ALL_BLOGS } from "../constants/ALL_BLOGS";

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
