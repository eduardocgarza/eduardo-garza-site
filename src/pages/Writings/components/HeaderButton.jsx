export default function HeaderButton(props) {
  const { title, blogType, blogState, setState } = props;

  return (
    <button
      onClick={() => setState(blogType)}
      className={`mr-2 py-2 px-4 text-xs border-2 rounded-full border-gray-900 ${
        blogState === blogType
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {title}
    </button>
  );
}