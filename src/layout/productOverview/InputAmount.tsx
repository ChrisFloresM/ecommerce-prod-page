import InputControlButton from "../../ui/InputControlButton.tsx";
import type { ChangeEvent, MouseEvent } from "react";

interface IInputAmountProps {
  value: number | "";
  increase: () => void;
  decrease: () => void;
  manual: (value: number) => void;
}

function InputAmount({ value, increase, decrease, manual }: IInputAmountProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    value = Number(e.currentTarget.value);
    manual(Math.floor(value));
  }

  function handleFocus(e: MouseEvent<HTMLInputElement>) {
    e.currentTarget.select();
  }

  return (
    <div className="bg-grey-50 text-grey-950 text-preset-3 leading-preset-3 flex flex-1 items-center justify-between rounded-[10px] p-200 font-bold lg:w-[30%]">
      <label htmlFor="items-amount" className="sr-only">
        Items amount
      </label>
      <InputControlButton type="minus" onClick={decrease} />
      <input
        id="items-amount"
        type="number"
        value={value}
        onClick={handleFocus}
        onChange={handleChange}
        className="w-full [appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <InputControlButton type="plus" onClick={increase} />
    </div>
  );
}

export default InputAmount;
