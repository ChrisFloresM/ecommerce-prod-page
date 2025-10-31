import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";
import type { ICartItem } from "../features/cart/ProductItem.tsx";

interface ICartContext {
  cartItems: ICartItem[] | null;
  addCartItem: (item: ICartItem) => void;
  removeCartItem: (name: string) => void;
  getTotalProducts: () => number;
}

const CartContext = createContext<ICartContext | null>(null);
export default function CartContextProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<ICartItem[] | null>(null);

  function addCartItem(item: ICartItem): void {
    setCartItems((items: ICartItem[] | null) => {
      if (!items) {
        return [item];
      }

      const currentItem = items.find((it: ICartItem) => it.name === item.name);
      if (currentItem) {
        return items.map((it: ICartItem) => {
          if (it.name === item.name)
            return { ...it, amount: it.amount + item.amount };
          return it;
        });
      }

      return [...items, item];
    });
  }

  function removeCartItem(name: string): void {
    setCartItems((items) => {
      return items ? items.filter((item: ICartItem) => item.name !== name) : [];
    });
  }

  function getTotalProducts(): number {
    return cartItems
      ? cartItems.reduce((total, item) => total + item.amount, 0)
      : 0;
  }

  const cartContextValue: ICartContext = {
    cartItems,
    addCartItem,
    removeCartItem,
    getTotalProducts,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const contextData = useContext(CartContext);

  if (!contextData) {
    throw new Error("Context being used outside provider");
  }

  return contextData;
}

export { useCart };
