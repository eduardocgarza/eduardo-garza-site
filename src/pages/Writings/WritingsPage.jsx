import React, { useState } from "react";
import RootLayout from "../../components/RootLayout";
import SoftwareBlogs from "./components/SoftwareBlogs";
import WritingsHeader from "./components/WritingsHeader";
import HardwareBlogs from "./components/HardwareBlogs";
import { SUBSTACK_BLOGS } from "../../constants/substackBlogs";

export default function WritingsPage(props) {
  const [blogActive, setBlogActive] = useState(
    SUBSTACK_BLOGS.SOFTWARE.blogType,
  );

  return (
    <RootLayout>
      <section className="mt-4 mb-8">
        {/* <WritingsHeader blogActive={blogActive} setBlogActive={setBlogActive} /> */}
        {blogActive === SUBSTACK_BLOGS.SOFTWARE.blogType && <SoftwareBlogs />}
        {/* {blogActive === SUBSTACK_BLOGS.HARDWARE.blogType && <HardwareBlogs />} */}
      </section>
    </RootLayout>
  );
}
