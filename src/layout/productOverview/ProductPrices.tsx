interface IProductPricesProps {
  price: number;
  disccount: number;
  finalPrice: number;
}

function ProductPrices({ price, disccount, finalPrice }: IProductPricesProps) {
  return (
    <div className="flex justify-between md:flex-col md:gap-100">
      <div className="flex items-center gap-200">
        <span className="text-preset-2 leading-preset-2 text-grey-950 font-bold">
          ${finalPrice.toFixed(2)}
        </span>
        {disccount > 0 && (
          <span className="text-preset-3 leading-preset-3 bg-grey-950 rounded-[6px] px-100 font-bold text-white">
            {disccount}%
          </span>
        )}
      </div>
      <div>
        <span className="text-preset-3 leading-preset-3 text-grey-500 font-bold line-through">
          ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}

export default ProductPrices;
