import ProductItem, { type ICartItem } from "./ProductItem.tsx";

function CartList({ products }: { products: ICartItem[] | null }) {
  if (!products) {
    return;
  }

  return (
    <ul className="space-y-200">
      {products.map((product: ICartItem) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </ul>
  );
}

export default CartList;
