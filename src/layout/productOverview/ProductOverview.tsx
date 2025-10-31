import Button from "../../ui/Button.tsx";
import InputAmount from "./InputAmount.tsx";
import ProductInfo from "./ProductInfo.tsx";
import ProductPrices from "./ProductPrices.tsx";
import type { IProductType } from "../Main/MainSection.tsx";
import { useState } from "react";
import type { ICartItem } from "../../features/cart/ProductItem.tsx";
import { useCart } from "../../context/CartContext.tsx";
import { FaCartShopping } from "react-icons/fa6";

function ProductOverview({ product }: { product: IProductType }) {
  const { images, company, productName, productDescription, price, discount } =
    product;
  const finalPrice = discount > 0 ? (price * discount) / 100 : price;
  const [amount, setAmount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const { addCartItem } = useCart();

  const cartProduct: ICartItem = {
    img: images[0],
    name: productName,
    unitPrice: price,
    amount,
  };

  function increaseAmount(): void {
    setAmount((amount) => (amount ? amount + 1 : 1));
    setError("");
  }

  function decreaseAmount(): void {
    setAmount((amount) => (amount && amount > 0 ? amount - 1 : amount));
  }

  function handleManualChange(value: number): void {
    setAmount(value);
  }

  function handleAddCart(): void {
    if (amount <= 0) {
      setError("Increase the amount of products before adding to cart!");
      return;
    }

    addCartItem(cartProduct);
  }

  return (
    <section className="flex flex-col gap-400 px-300 md:gap-300 md:px-0 lg:gap-400">
      <ProductInfo
        company={company}
        name={productName}
        description={productDescription}
      />
      <ProductPrices
        price={price}
        disccount={discount}
        finalPrice={finalPrice}
      />
      <div className="flex flex-col gap-200 md:flex-row md:gap-100">
        <InputAmount
          value={amount}
          increase={increaseAmount}
          decrease={decreaseAmount}
          manual={handleManualChange}
        />
        <div className="md:flex-1 lg:flex-2">
          <Button text="Add to cart" onClick={handleAddCart}>
            <FaCartShopping />
          </Button>
        </div>
      </div>
      {error && (
        <p className="animate-fade-in-scale w-full text-center text-red-500">
          {error}
        </p>
      )}
    </section>
  );
}

export default ProductOverview;
