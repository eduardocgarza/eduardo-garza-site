import SectionCategoryBadge from "./SectionCategoryBadge";
import BlogPreviewItem from "../../../components/Home/BlogPreviewItem";

export default function CategoryItem(props) {
  const { title, blogs } = props;
  if (!blogs || blogs.length === 0) return null;
  return (
    <section className="mb-6">
      <SectionCategoryBadge title={title} />
      {blogs &&
        blogs.map((blog) => <BlogPreviewItem key={blog.slug} blog={blog} />)}
    </section>
  );
}
