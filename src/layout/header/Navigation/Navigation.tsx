import { useMobileCheck } from "../hooks/useMobileCheck.ts";
import { useRef, useState } from "react";
import NavigationList from "./NavigationList.tsx";
import NavMenuControlButton from "./NavMenuControlButton.tsx";
import useFocusTrap from "../../../hooks/useFocusTrap.tsx";

const navBaseClassName =
  "fixed top-0 left-0 order-1 h-dvh space-y-700 px-1000 py-600 bg-orange-500 lg:relative z-50" +
  " lg:order-2 lg:h-auto lg:space-y-0 lg:bg-transparent lg:p-0 transition-transform duration-300" +
  " ease-in-out lg:translate-x-0";

function Navigation() {
  const isMobile = useMobileCheck(1024);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  function handleOpenMenu() {
    setIsMobileMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

  useFocusTrap(isMobile && isMobileMenuOpen, navRef, handleCloseMenu);

  return (
    <>
      <NavMenuControlButton
        type="open"
        clickHandler={handleOpenMenu}
        expanded={isMobileMenuOpen}
      />
      {isMobileMenuOpen && (
        <div
          onClick={handleCloseMenu}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          aria-hidden="true"
        ></div>
      )}
      <nav
        className={`${navBaseClassName} ${isMobileMenuOpen ? "z-50 translate-x-0" : "-translate-x-full"}`}
        aria-hidden={isMobile && !isMobileMenuOpen}
        inert={isMobile && !isMobileMenuOpen}
        id="navigation-menu"
        ref={navRef}
      >
        <NavMenuControlButton
          type="close"
          clickHandler={handleCloseMenu}
          expanded={isMobileMenuOpen}
        />
        <NavigationList />
      </nav>
    </>
  );
}

export default Navigation;
