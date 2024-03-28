import BlogPreviewItem from "./BlogPreviewItem";

const electronicsBlogs = [
  {
    id: 1,
    title: "Introduction to Arduino Programming",
    shortDescription:
      "Learn the basics of Arduino programming and start building your own projects.",
    datePublished: "2024-03-15",
    lastEdited: "2024-03-20",
  },
  {
    id: 2,
    title: "Building Your First Raspberry Pi Project",
    shortDescription:
      "Step-by-step guide to creating your first Raspberry Pi project from scratch.",
    datePublished: "2024-02-28",
    lastEdited: "2024-03-05",
  },
  {
    id: 3,
    title: "Understanding Integrated Circuits",
    shortDescription:
      "An overview of integrated circuits and their applications in modern electronics.",
    datePublished: "2024-01-10",
    lastEdited: "2024-01-15",
  },
  {
    id: 4,
    title: "Exploring IoT (Internet of Things)",
    shortDescription:
      "Discover the world of IoT and its impact on electronics and hardware development.",
    datePublished: "2023-12-05",
    lastEdited: "2023-12-10",
  },
  {
    id: 5,
    title: "Introduction to PCB Design",
    shortDescription:
      "Learn the basics of PCB design and how to create your own printed circuit boards.",
    datePublished: "2023-11-20",
    lastEdited: "2023-11-25",
  },
  {
    id: 6,
    title: "Understanding Analog vs. Digital Signals",
    shortDescription:
      "Dive into the differences between analog and digital signals in electronics.",
    datePublished: "2023-10-15",
    lastEdited: "2023-10-20",
  },
  {
    id: 7,
    title: "Getting Started with Microcontrollers",
    shortDescription:
      "A beginner's guide to microcontrollers and how to use them in your projects.",
    datePublished: "2023-09-05",
    lastEdited: "2023-09-10",
  },
  {
    id: 8,
    title: "Introduction to Sensors",
    shortDescription:
      "Explore different types of sensors and their applications in electronics.",
    datePublished: "2023-08-20",
    lastEdited: "2023-08-25",
  },
  {
    id: 9,
    title: "DIY Electronics Projects for Beginners",
    shortDescription:
      "Easy-to-follow electronics projects for beginners to kickstart their learning journey.",
    datePublished: "2023-07-10",
    lastEdited: "2023-07-15",
  },
  {
    id: 10,
    title: "Troubleshooting Common Hardware Issues",
    shortDescription:
      "Tips and techniques to diagnose and fix common hardware problems.",
    datePublished: "2023-06-01",
    lastEdited: "2023-06-05",
  },
];

export default function SectionItem(props) {
  return (
    <section className="mt-4 mb-8">
      <h2 className="text-lg font-medium mb-2">{props.title}</h2>
      <section>
        {electronicsBlogs.map((blog) => (
          <BlogPreviewItem key={blog.id} blog={blog} />
        ))}
      </section>
      <footer className="flex justify-center items-center">
        <div className="my-4 border-2 w-1/2 border-b border-b border-blue-500 rounded-full"></div>
      </footer>
    </section>
  );
}
