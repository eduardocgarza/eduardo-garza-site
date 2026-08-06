import codeButton from "../../../../src/assets/icons/icon-code.png";


export default function ProjectButtonRed(props) {
  const { url } = props;

  return (
    <a
      className="flex items-center text-xs bg-red-500 text-white px-2 py-1.5 rounded-full mr-2"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <img src={codeButton} alt="" className="block w-[15px] h-[15px] mr-2" />
      <span>View code</span>
    </a>
  );
}
