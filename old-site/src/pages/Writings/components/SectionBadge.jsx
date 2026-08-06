export default function SectionBadge(props) {
  const { title } = props;

  return (
    <header className="mb-4 border-b border-b-gray-900 pb-2">
      <h3 className="text-lg font-bold text-gray-900 rounded-full inline-block">
        {title}
      </h3>
    </header>
  );
}
