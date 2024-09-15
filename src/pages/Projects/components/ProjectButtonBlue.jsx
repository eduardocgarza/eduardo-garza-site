import playButton from "../../../../src/assets/icons/icon-play.png";

export default function ProjectButtonBlue(props) {
  const { url } = props;

  return (
    <a
      className="flex items-center text-xs bg-blue-600 text-white px-2 py-1.5 rounded-full mr-2"
      href={url}
      rel="noreferrer"
      target="_blank"
    >
      <img src={playButton} alt="" className="block w-[15px] h-[15px] mr-2" />
      <span>Try demo</span>
    </a>
  );
}
