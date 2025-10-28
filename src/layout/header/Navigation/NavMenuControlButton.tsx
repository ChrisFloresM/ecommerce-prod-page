interface INavMenuControlButtonProps {
  type: "open" | "close";
  clickHandler: () => void;
  expanded: boolean;
}

function NavMenuControlButton({
  type,
  clickHandler,
  expanded,
}: INavMenuControlButtonProps) {
  return (
    <button
      type="button"
      aria-label={`${type} the navigation menu`}
      aria-expanded={expanded}
      aria-controls="navigation-menu"
      className="md:hidden"
      onClick={clickHandler}
    >
      <img
        src={type === "open" ? "/icons/icon-menu.svg" : "/icons/icon-close.svg"}
        alt="A burguer menu icon"
      />
    </button>
  );
}

export default NavMenuControlButton;
