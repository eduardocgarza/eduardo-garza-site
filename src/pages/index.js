import SectionItem from "../components/Home/SectionItem";
import RootLayout from "@/app/layout";

export default function HomePage() {
  return (
    <RootLayout>
      <SectionItem title="Electronics" />
      <SectionItem title="Manufacturing" />
    </RootLayout>
  );
}
