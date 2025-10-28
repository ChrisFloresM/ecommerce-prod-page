function CartButton() {
  return (
    <button
      type="button"
      aria-label="Open cart"
      className="relative hover:cursor-pointer"
    >
      <span className="absolute -top-1/2 -right-1/2 rounded-full bg-orange-500 px-[0.5rem] text-[0.625rem] font-bold text-white">
        3
      </span>
      <img src="/icons/icon-cart.svg" alt="An icon of a cart" />
    </button>
  );
}

export default CartButton;
