interface ICarousselButtonProps {
  direction: "next" | "previous";
  onClick: () => void;
  isModal?: boolean;
}

const baseClass =
  "absolute top-1/2 flex -translate-y-1/2 items-center justify-center" +
  " rounded-full bg-white hover:cursor-pointer";
function CarousselButton({
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
      onClick={onClick}
    >
      <img
        src={
          direction == "next"
            ? "/icons/icon-next.svg"
            : "/icons/icon-previous.svg"
        }
        alt={`An icon of a ${direction == "next" ? "right" : "left"} arrow`}
      />
    </button>
  );
}

export default CarousselButton;
