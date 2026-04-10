export default function SectionCategoryBadge(props) {
  const { title } = props;
  return (
    <header className="mb-3">
      <h4 className="text-[13.5px] bg-blue-600 text-white px-3 py-1 rounded-r-lg inline-block">
        {title}
      </h4>
    </header>
  );
}
