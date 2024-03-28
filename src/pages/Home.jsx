import React from "react";
import SectionItem from "../components/Home/SectionItem";
import RootLayout from "../components/RootLayout";

export default function HomePage() {
  return (
    <RootLayout>
      <SectionItem title="Electronics" />
      <SectionItem title="Manufacturing" />
    </RootLayout>
  );
}
