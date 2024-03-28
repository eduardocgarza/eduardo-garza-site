import RootLayout from "@/app/layout";

export default function AboutPage() {
  return (
    <RootLayout>
      <section className="mt-20">
        <h1 className="text-3xl font-semibold">About Me</h1>
        <p className="text-gray-500 mt-2">
          Im a hardware engineer with a passion for electronics and embedded
          systems. I enjoy working on projects that involve designing and
          building circuits, as well as programming microcontrollers to bring
          them to life. My goal is to share my knowledge and experience with
          others who are interested in learning more about the field of
          electronics.
        </p>
      </section>
    </RootLayout>
  );
}
