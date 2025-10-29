import InputControlButton from "../../ui/InputControlButton.tsx";

function InputAmount() {
  function handleClick(): void {
    console.log("Click!");
  }

  return (
    <div className="bg-grey-50 text-grey-950 text-preset-3 leading-preset-3 flex items-center justify-between rounded-[10px] p-200 font-bold">
      <label htmlFor="items-amount" className="sr-only">
        Items amount
      </label>
      <InputControlButton type="minus" onClick={handleClick} />
      <input
        id="items-amount"
        type="number"
        value="0"
        className="flex-1 [appearance:textfield] text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
      <InputControlButton type="plus" onClick={handleClick} />
    </div>
  );
}

export default InputAmount;
