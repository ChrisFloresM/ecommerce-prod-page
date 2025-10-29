interface IInputControlButtonProps {
  type: "plus" | "minus";
  onClick: () => void;
}

function InputControlButton({ type, onClick }: IInputControlButtonProps) {
  return (
    <button className="hover:cursor-pointer" onClick={onClick}>
      <img
        src={type === "plus" ? "/icons/icon-plus.svg" : "/icons/icon-minus.svg"}
        alt={`An icon of a ${"plus"} symbol`}
        className="min-w-[12px]"
      />
    </button>
  );
}

export default InputControlButton;
