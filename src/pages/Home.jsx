import React from "react";
import SectionItem from "../components/Home/SectionItem";
import RootLayout from "../components/RootLayout";
import { ALL_BLOGS } from '../constants/ALL_BLOGS';

export default function HomePage() {
  const softwareBlogs = ALL_BLOGS.filter(blog => blog.type === "software");
  const hardwareBlogs = ALL_BLOGS.filter(blog => blog.type === "hardware");

  console.log("New Home")

    
  return (
    <RootLayout>
      <SectionItem 
        title="Software" 
        blogs={softwareBlogs} 
      />
      <SectionItem 
        title="Hardware" 
        blogs={hardwareBlogs} 
      />
    </RootLayout>
  );
}
