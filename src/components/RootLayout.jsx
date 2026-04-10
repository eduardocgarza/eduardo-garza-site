import React from "react";
import MainNav from "./MainNav";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <section>
      <ScrollToTop />
      <MainNav />
      <div className="px-2 md:min-w-[600px] max-w-[750px] mx-auto">{children}</div>
    </section>
  );
}
