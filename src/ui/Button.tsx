function Button({ text }: { text: string }) {
  return (
    <button className="text-preset-3 leading-preset-3 text-grey-950 w-full rounded-[10px] bg-orange-500 py-200 font-bold">
      {text}
    </button>
  );
}

export default Button;
