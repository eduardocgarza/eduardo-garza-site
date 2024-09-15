import React from "react";
import MainNav from "./MainNav";

export default function RootLayout({ children }) {
  
  return (
    <section className="font-openSans">
      <MainNav />
      <div className="px-2 md:min-w-[600px] max-w-[750px] mx-auto">{children}</div>
    </section>
  );
}
