import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

interface ICarousselButtonProps {
  direction: "next" | "previous";
  onClick: () => void;
  isModal?: boolean;
}

const baseClass =
  "absolute top-1/2 flex -translate-y-1/2 items-center justify-center" +
  " rounded-full bg-white hover:cursor-pointer text-xl";
function CarouselButton({
  direction,
  onClick,
  isModal = false,
}: ICarousselButtonProps) {
  let buttonDirectionClass: string;

  if (direction === "next") {
    buttonDirectionClass = isModal ? "right-0 translate-x-1/2" : "right-200";
  } else {
    buttonDirectionClass = isModal ? "left-0 -translate-x-1/2" : "left-200";
  }

  return (
    <button
      className={`${buttonDirectionClass} ${baseClass} ${isModal ? "" : "lg:hidden"} ${isModal ? "h-[56px] w-[56px]" : "h-[40px] w-[40px]"}`}
      type="button"
      aria-label={`Go to ${direction} image`}
      onClick={onClick}
    >
      {direction === "next" ? (
        <MdArrowForwardIos className="text-grey-500 hover:text-orange-500" />
      ) : (
        <MdOutlineArrowBackIos className="text-grey-500 hover:text-orange-500" />
      )}
    </button>
  );
}

export default CarouselButton;
