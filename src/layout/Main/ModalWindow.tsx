import Carousel from "../../features/carousel/Carousel.tsx";
import { useEffect, useRef } from "react";
import useFocusTrap from "../../hooks/useFocusTrap.tsx";
import { IoCloseSharp } from "react-icons/io5";

interface IModalWindowProps {
  closeModal: () => void;
  images: string[];
  thumbnail: string[];
}

function ModalWindow({ closeModal, images, thumbnail }: IModalWindowProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useFocusTrap(true, modalRef, closeModal);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, []);

  return (
    <section className="absolute inset-0 z-100 hidden max-h-dvh w-full items-center justify-center bg-black/50 lg:flex">
      <div className="relative w-[550px] pt-500" ref={modalRef}>
        <button
          type="button"
          aria-label="Close modal window"
          onClick={closeModal}
          className="absolute top-0 right-0 z-10 hover:cursor-pointer"
          ref={buttonRef}
        >
          <IoCloseSharp className="text-[2rem] text-orange-500 hover:text-orange-300" />
        </button>
        <Carousel images={images} thumbnail={thumbnail} isModal={true} />
      </div>
    </section>
  );
}

export default ModalWindow;
