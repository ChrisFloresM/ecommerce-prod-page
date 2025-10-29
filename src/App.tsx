import Header from "./layout/header/Header.tsx";
import MainSection from "./layout/Main/MainSection.tsx";
import CartContextProvider from "./context/CartContext.tsx";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <MainSection />
    </CartContextProvider>
  );
}

export default App;
