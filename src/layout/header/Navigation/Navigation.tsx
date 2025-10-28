import { useMobileCheck } from "../hooks/useMobileCheck.ts";
import { useState } from "react";
import NavigationList from "./NavigationList.tsx";
import NavMenuControlButton from "./NavMenuControlButton.tsx";

const navBaseClassName =
  "fixed top-0 left-0 order-1 h-dvh space-y-700 px-1000 py-600 bg-orange-500 md:relative" +
  " md:order-2 md:h-auto md:space-y-0 md:bg-transparent md:p-0 transition-transform duration-300" +
  " ease-in-out md:translate-x-0";

function Navigation() {
  const isMobile = useMobileCheck(768);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  function handleOpenMenu() {
    setIsMobileMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMobileMenuOpen(false);
  }

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
