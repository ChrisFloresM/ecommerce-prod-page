import CarousselButton from "../../ui/CarousselButton.tsx";

interface IProductImageProps {
  images: string[];
  thumbnail: string[];
}

function ProductImage({ images, thumbnail }: IProductImageProps) {
  const imgSrc = images[0];
  function handleNext() {
    console.log("next");
  }

  function handlePrevious() {
    console.log("previous");
  }

  return (
    <section
      aria-label="Images of the product"
      className="relative flex max-h-[300px] w-full items-center overflow-hidden sm:rounded-[10px]"
    >
      <CarousselButton direction="next" onClick={handleNext} />
      <CarousselButton direction="previous" onClick={handlePrevious} />
      <img src={imgSrc} alt="A picture of the product" className="w-full" />
    </section>
  );
}

export default ProductImage;
