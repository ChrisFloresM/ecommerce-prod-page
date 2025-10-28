import Navigation from "./Navigation/Navigation.tsx";
import CartButton from "./CartButton.tsx";
import Avatar from "./Avatar.tsx";
import Logo from "./Logo.tsx";

function Header() {
  return (
    <header className="border-grey-100 flex justify-between border-b-1 pb-400">
      <div className="flex items-center gap-200 md:gap-700">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-300 sm:gap-600">
        <CartButton />
        <Avatar />
      </div>
    </header>
  );
}

export default Header;
