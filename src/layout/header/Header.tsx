import Navigation from "./Navigation/Navigation.tsx";
import CartButton from "./CartButton.tsx";
import Avatar from "./Avatar.tsx";
import Logo from "./Logo.tsx";

function Header() {
  return (
    <header className="lg:border-grey-100 flex justify-between border-b-0 px-300 pb-0 sm:px-0 lg:border-b-1 lg:pb-400">
      <div className="flex items-center gap-200 lg:gap-700">
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
