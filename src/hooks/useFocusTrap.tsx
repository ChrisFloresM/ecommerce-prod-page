import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
} from "react";
export default function useFocusTrap(
  openCondition: boolean,
  ref: RefObject<HTMLElement | null>,
  setCloseState: Dispatch<SetStateAction<boolean>>,
): void {
  useEffect(() => {
    if (openCondition && ref.current) {
      const element = ref.current;
      const focusableElements = element
        ? element.querySelectorAll(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
          )
        : [];
      const first = focusableElements[0] as HTMLElement;
      const last = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;
      function handleTabKeyPress(e: KeyboardEvent) {
        if (e.key == "Tab") {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }

      function handleEscapePress(e: KeyboardEvent) {
        if (e.key === "Escape") {
          setCloseState(false);
        }
      }

      element?.addEventListener("keydown", handleTabKeyPress);
      element?.addEventListener("keydown", handleEscapePress);

      return () => {
        element?.removeEventListener("keydown", handleTabKeyPress);
        element?.removeEventListener("keydown", handleEscapePress);
      };
    }
  }, [openCondition, ref, setCloseState]);
}
