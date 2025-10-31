import Carousel from "../../features/carousel/Carousel.tsx";
import ProductOverview from "../productOverview/ProductOverview.tsx";
import { useState } from "react";
import ModalWindow from "./ModalWindow.tsx";

export interface IProductType {
  images: string[];
  thumbnail: string[];
  company: string;
  productName: string;
  productDescription: string;
  price: number;
  discount: number;
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
  discount: 50,
};

function MainSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal(): void {
    setIsModalOpen(true);
  }

  function handleCloseModal(): void {
    setIsModalOpen(false);
  }

  return (
    <main className="flex flex-col items-center gap-300 md:gap-600 lg:flex-row lg:gap-1600 lg:px-400">
      {isModalOpen && (
        <ModalWindow
          closeModal={handleCloseModal}
          images={currentProduct.images}
          thumbnail={currentProduct.thumbnail}
        />
      )}
      <Carousel
        images={currentProduct.images}
        thumbnail={currentProduct.thumbnail}
        openModal={handleOpenModal}
      />
      <ProductOverview product={currentProduct} />
    </main>
  );
}
export default MainSection;
