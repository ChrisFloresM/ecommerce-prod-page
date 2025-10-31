import { useCart } from "../../context/CartContext.tsx";
import { BsCart3 } from "react-icons/bs";

function CartButton({ onClick }: { onClick: () => void }) {
  const { getTotalProducts } = useCart();
  const cartLength = getTotalProducts();

  return (
    <button
      type="button"
      aria-label="Open cart"
      className="relative text-xl hover:cursor-pointer"
      onClick={onClick}
    >
      {cartLength > 0 && (
        <span className="absolute -top-1/2 -right-1/2 rounded-full bg-orange-500 px-[0.5rem] text-[0.625rem] font-bold text-white">
          {cartLength}
        </span>
      )}
      <BsCart3 className="text-grey-500 transition-colors duration-100 hover:text-orange-500" />
    </button>
  );
}

export default CartButton;
