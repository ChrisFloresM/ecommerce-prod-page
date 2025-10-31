import type { PropsWithChildren } from "react";

interface IButtonProps {
  text: string;
  onClick: () => void;
}

function Button({ text, onClick, children }: PropsWithChildren<IButtonProps>) {
  return (
    <button
      className="text-preset-3 leading-preset-3 text-grey-950 shadow-secondary flex w-full items-center justify-center gap-100 rounded-[10px] bg-orange-500 py-200 font-bold transition-colors duration-200 hover:cursor-pointer hover:bg-orange-300 active:bg-orange-300"
      onClick={onClick}
    >
      {children && <span>{children}</span>}
      <span>{text}</span>
    </button>
  );
}

export default Button;
