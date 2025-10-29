import ProductImage from "../productImages/ProductImage.tsx";
import ProductOverview from "../productOverview/ProductOverview.tsx";

function Main() {
  return (
    <main className="flex flex-col gap-300 md:gap-600 lg:flex-row">
      <ProductImage />
      <ProductOverview />
    </main>
  );
}

export default Main;
