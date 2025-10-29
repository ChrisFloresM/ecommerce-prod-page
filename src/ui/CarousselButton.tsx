interface ICarousselButtonProps {
  direction: "next" | "previous";
  onClick: () => void;
}

const baseClass =
  "absolute top-1/2 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded-full bg-white";
function CarousselButton({ direction, onClick }: ICarousselButtonProps) {
  return (
    <button
      className={`${direction === "next" ? "right-200" : "left-200"} ${baseClass}`}
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
