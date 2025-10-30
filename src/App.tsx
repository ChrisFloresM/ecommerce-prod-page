import Header from "./layout/header/Header.tsx";
import MainSection from "./layout/Main/MainSection.tsx";
import CartContextProvider from "./context/CartContext.tsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MainSection />
    </CartContextProvider>
    /*    <div className="margin-auto h-[500px] max-w-[500px] bg-green-200 outline-2 outline-cyan-950">
      <img
        src="/img/image-product-3.jpg"
        alt="product image"
        className="w-[100%] object-cover object-top"
      />
    </div>*/
  );
}

export default App;
