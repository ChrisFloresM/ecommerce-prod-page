import Button from "../../ui/Button.tsx";
import InputAmount from "./InputAmount.tsx";
import ProductInfo from "./ProductInfo.tsx";
import ProductPrices from "./ProductPrices.tsx";

function ProductOverview() {
  return (
    <section className="flex flex-col gap-400 px-300 md:gap-300 md:px-0">
      <ProductInfo />
      <ProductPrices />
      <div className="flex flex-col gap-200 md:flex-row md:gap-100">
        <InputAmount />
        <div className="md:flex-1">
          <Button text="Add to cart" />
        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
