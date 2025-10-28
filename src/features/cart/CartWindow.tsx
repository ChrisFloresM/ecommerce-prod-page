import Button from "../../ui/Button.tsx";
import CartList from "./CartList.tsx";
import type { ICartItem } from "./ProductItem.tsx";

let itemsList: ICartItem[] = [
  {
    img: "/img/image-product-1-thumbnail.jpg",
    name: "Fall Limited Edition Sneakers",
    unitPrice: 125,
    amount: 3,
  },
];

function CartWindow() {
  /*  itemsList = [];*/
  return (
    <section
      className="shadow-primary animate-fade-in-scale absolute top-full right-1/2 w-[22.5rem] translate-x-1/2 rounded-[10px] bg-white py-300 sm:top-[2rem] sm:translate-x-[calc(25%+2vw)]"
      aria-label="Products cart window"
    >
      <h3 className="text-preset-3 leading-preset-3 border-b-grey-100 border-b-1 px-[0.75rem] pb-300 font-bold">
        Cart
      </h3>
      {!itemsList.length ? (
        <p className="text-grey-500 text-preset-3 leading-preset-3 py-900 text-center">
          Your cart is empty.
        </p>
      ) : (
        <div className="space-y-300 p-300">
          <CartList products={itemsList} />
          <Button text="Checkout" />
        </div>
      )}
    </section>
  );
}

export default CartWindow;
