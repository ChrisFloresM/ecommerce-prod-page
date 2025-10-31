import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

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
      className="lg:hidden"
      onClick={clickHandler}
    >
      {type === "close" ? (
        <MdOutlineClose className="text-[1.5rem]" />
      ) : (
        <GiHamburgerMenu className="text-[1.5rem]" />
      )}
    </button>
  );
}

export default NavMenuControlButton;
