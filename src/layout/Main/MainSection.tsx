import ProductImage from "../productImages/ProductImage.tsx";
import ProductOverview from "../productOverview/ProductOverview.tsx";

export interface IProductType {
  images: string[];
  thumbnail: string[];
  company: string;
  productName: string;
  productDescription: string;
  price: number;
  disccount: number;
}

const currentProduct: IProductType = {
  images: [
    "/img/image-product-1.jpg",
    "/img/image-product-2.jpg",
    "/img/image-product-3.jpg",
    "/img/image-product-4.jpg",
  ],
  thumbnail: [
    "/img/image-product-1-thumbnail.jpg",
    "/img/image-product-2-thumbnail.jpg",
    "/img/image-product-3-thumbnail.jpg",
    "/img/image-product-4-thumbnail.jpg",
  ],
  company: "Sneaker Company",
  productName: "Fall Limited Edition Sneakers",
  productDescription:
    "The low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole , they'l l withstand everything the weather can offer.",
  price: 250,
  disccount: 50,
};

function MainSection() {
  return (
    <main className="flex flex-col gap-300 md:gap-600 lg:flex-row">
      <ProductImage
        images={currentProduct.images}
        thumbnail={currentProduct.thumbnail}
      />
      <ProductOverview product={currentProduct} />
    </main>
  );
}

export default MainSection;
