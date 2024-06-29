import CategoryItem from "./CategoryItem";
import SectionBadge from "./SectionBadge";

export default function SectionItem(props) {
  const { title, categories } = props;
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <SectionBadge title={title} />
      {categories &&
        categories.map((categoryItem) => (
          <CategoryItem
            key={categoryItem.title}
            title={categoryItem.title}
            blogs={categoryItem.blogs}
          />
        ))}
    </section>
  );
}
