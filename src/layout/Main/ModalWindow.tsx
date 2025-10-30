import ProductImage from "../productImages/ProductImage.tsx";

interface IModalWindowProps {
  closeModal: () => void;
  images: string[];
  thumbnail: string[];
}

function ModalWindow({ closeModal, images, thumbnail }: IModalWindowProps) {
  return (
    <section className="absolute inset-0 z-100 hidden max-h-dvh w-full items-center justify-center bg-black/50 lg:flex">
      <div className="relative w-[550px] pt-500">
        <button
          type="button"
          aria-label="A button to close the modal window"
          onClick={closeModal}
          className="absolute top-0 right-0 z-10 hover:cursor-pointer"
        >
          <img
            src="/icons/icon-close.svg"
            alt="An icon of a cross to close"
            className="w-[20px]"
          />
        </button>
        <ProductImage images={images} thumbnail={thumbnail} isModal={true} />
      </div>
    </section>
  );
}

export default ModalWindow;
