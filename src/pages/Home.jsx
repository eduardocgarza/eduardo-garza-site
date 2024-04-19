import React from "react";
import RootLayout from "../components/RootLayout";
import SectionItem from "../components/Home/SectionItem";
import { ALL_BLOGS, CATEGORIES } from '../constants/ALL_BLOGS';

export default function HomePage() {
  const getBlogs = (categorySlug) => ALL_BLOGS.filter(blog => blog.category === categorySlug);

  const softwareBlogs = getBlogs(CATEGORIES.SOFTWARE.categorySlug)
  const hardwareBlogs = getBlogs(CATEGORIES.HARDWARE.categorySlug)
  const hardwareManufacturingBlogs = getBlogs(CATEGORIES.HARDWARE_MANUFACTURING.categorySlug)

  return (
    <RootLayout>
      <SectionItem 
        title={CATEGORIES.SOFTWARE.categoryName}
        blogs={softwareBlogs} 
      />
      <SectionItem 
        title="Hardware" 
        blogs={hardwareBlogs} 
      />
      <SectionItem
        title="PCB Manufacturing"
        blogs={hardwareManufacturingBlogs}
      />
    </RootLayout>
  );
}
