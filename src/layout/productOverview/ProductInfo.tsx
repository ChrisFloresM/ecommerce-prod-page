function ProductInfo() {
  return (
    <div className="flex flex-col gap-200 md:gap-300">
      <span className="text-preset-6 leading-preset-6 tracking-preset-6 text-grey-500 md:text-preset-5 md:leading-preset-5 md:tracking-preset-5 font-bold">
        Sneaker Company
      </span>
      <h1 className="text-preset-2 leading-preset-2 md:text-preset-1 md:leading-preset-1 font-bold">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-preset-4 leading-preset-4 text-grey-500 md:text-preset-3 md:leading-preset-3">
        The low-profile sneakers are perfect casual wear companion. Featuring a
        durable rubber outer sole , they'l l withstand everything the weather
        can offer.
      </p>
    </div>
  );
}

export default ProductInfo;
