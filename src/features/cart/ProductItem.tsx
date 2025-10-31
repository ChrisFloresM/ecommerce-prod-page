import { useCart } from "../../context/CartContext.tsx";
import { FaTrashCan } from "react-icons/fa6";

export interface ICartItem {
  img: string;
  name: string;
  unitPrice: number;
  amount: number;
}
function ProductItem({ product }: { product: ICartItem }) {
  const { img, name, unitPrice, amount } = product;
  const { removeCartItem } = useCart();
  const total = unitPrice * amount;

  function handleDelete() {
    removeCartItem(name);
  }

  return (
    <li className="flex items-center gap-200">
      <img
        src={img}
        alt={`An image of ${name}`}
        className="max-w-[50px] rounded-[4px]"
      />
      <div className="text-preset-3 leading-preset-3 text-grey-500 grid grid-cols-2">
        <span className="col-span-full gap-x-100">{name}</span>
        <span>
          ${unitPrice.toFixed(2)} x {amount}
        </span>
        <span className="text-grey-950 font-bold">${total.toFixed(2)}</span>
      </div>
      <button
        className="hover:cursor-pointer"
        onClick={handleDelete}
        aria-label="Delete item"
        type="button"
      >
        <FaTrashCan className="text-grey-500 transition-colors duration-100 hover:text-orange-500" />
      </button>
    </li>
  );
}

export default ProductItem;
