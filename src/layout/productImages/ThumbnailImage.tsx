import { handleKeyDown } from "../../utils/utils.ts";

interface IThumbnailImageProps {
  path: string;
  index: number;
  currImg: number;
  onClick: (index: number) => void;
}

function ThumbnailImage({
  path,
  index,
  currImg,
  onClick,
}: IThumbnailImageProps) {
  const isSelected = index === currImg;

  function handleClick() {
    onClick(index);
  }

  return (
    <div
      className={`${isSelected ? "shadow-tertiary ring-2 ring-orange-500" : ""} relative overflow-hidden rounded-[10px] transition-all duration-200 hover:cursor-pointer hover:ring-2 hover:ring-orange-500`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Select image ${index + 1}`}
      aria-pressed={isSelected}
    >
      <img src={path} alt={`An thumbnail of image ${index + 1}`} />
      {isSelected && <div className="absolute inset-0 bg-white/60"></div>}
    </div>
  );
}

export default ThumbnailImage;
