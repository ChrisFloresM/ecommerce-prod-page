import { useEffect, useState } from "react";

export function useMobileCheck(maxWidth: number): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    function checkForMobile() {
      setIsMobile(window.innerWidth < maxWidth);
    }

    checkForMobile();
    window.addEventListener("resize", checkForMobile);

    return () => window.removeEventListener("resize", checkForMobile);
  }, [maxWidth]);

  return isMobile;
}
