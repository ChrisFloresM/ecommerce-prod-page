import { useCart } from "../../context/CartContext.tsx";

function CartButton({ onClick }: { onClick: () => void }) {
  const { getTotalProducts } = useCart();
  const cartLength = getTotalProducts();

  return (
    <button
      type="button"
      aria-label="Open cart"
      className="relative hover:cursor-pointer"
      onClick={onClick}
    >
      {cartLength > 0 && (
        <span className="absolute -top-1/2 -right-1/2 rounded-full bg-orange-500 px-[0.5rem] text-[0.625rem] font-bold text-white">
          {cartLength}
        </span>
      )}
      <img src="/icons/icon-cart.svg" alt="An icon of a cart" />
    </button>
  );
}

export default CartButton;
