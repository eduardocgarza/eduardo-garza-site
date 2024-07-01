export default function SectionCategoryBadge(props) {
  const { title } = props;
  return (
    <header className="mb-3">
      <h4 className="text-xs bg-blue-600 text-white px-3 py-1 rounded-tr-full rounded-br-full inline-block">
        {title}
      </h4>
    </header>
  );
}
