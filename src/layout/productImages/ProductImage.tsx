import CarousselButton from "../../ui/CarousselButton.tsx";
import { useState } from "react";
import ThumbnailImage from "./ThumbnailImage.tsx";

interface IProductImageProps {
  images: string[];
  thumbnail: string[];
  openModal?: () => void;
  isModal?: boolean;
}

function ProductImage({
  images,
  thumbnail,
  openModal,
  isModal = false,
}: IProductImageProps) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const imgSrc = images[currentImg];

  function handleNext() {
    setCurrentImg((curr) => (curr + 1) % images.length);
  }

  function handlePrevious(): void {
    setCurrentImg((curr) => (curr < 1 ? images.length - 1 : curr - 1));
  }

  function selectImage(index: number): void {
    setCurrentImg(index);
  }

  return (
    <section
      aria-label="Images of the product"
      className={`${isModal ? "gap-500" : "gap-400"} flex w-full flex-col`}
    >
      <div className="relative">
        <CarousselButton
          direction="next"
          onClick={handleNext}
          isModal={isModal}
        />
        <CarousselButton
          direction="previous"
          onClick={handlePrevious}
          isModal={isModal}
        />
        <img
          src={imgSrc}
          alt="A picture of the product"
          onClick={openModal}
          className={`${currentImg === 0 ? "object-center" : "object-top"} ${isModal ? "" : "cursor-pointer"} h-[300px] w-full object-cover sm:rounded-[10px] lg:h-full`}
        />
      </div>
      <div className={`${isModal ? "px-500" : ""} hidden gap-400 lg:flex`}>
        {thumbnail.map((img: string, index: number) => (
          <ThumbnailImage
            path={img}
            index={index}
            currImg={currentImg}
            onClick={selectImage}
            key={img}
          />
        ))}
      </div>
    </section>
  );
}
export default ProductImage;
