import fs from "fs";
import path from "path";
import matter from "gray-matter"; // For parsing Markdown frontmatter
import RootLayout from "@/app/layout";
import ReactMarkdown from "react-markdown";

export default function BlogPost({ title, content }) {
  console.log(content)
  
  return (
    <RootLayout>
      <article>
        <h1>{title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </RootLayout>
  );
}

export async function getStaticPaths() {
  const blogsPath = path.join(process.cwd(), "src/data", "blogs.json");
  const blogsData = JSON.parse(fs.readFileSync(blogsPath, "utf-8"));

  const paths = blogsData.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const blogsPath = path.join(process.cwd(), "src/data", "blogs.json");
  const blogsData = JSON.parse(fs.readFileSync(blogsPath, "utf-8"));

  const blog = blogsData.find((blog) => blog.slug === slug);
  if (!blog) {
    return {
      notFound: true,
    };
  }

  const markdownPath = path.join(
    process.cwd(),
    "src/data/content",
    `${blog.fileName}.md`
  );
  const markdownFileContent = fs.readFileSync(markdownPath, "utf-8");
  const { content, data } = matter(markdownFileContent);

  return {
    props: {
      title: data.title,
      content,
    },
  };
}
