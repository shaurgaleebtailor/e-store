import { useState, useEffect } from "react";
export const useMOWChecker = () => {
  // letting MOW styles for the screens which are less than 768px(mimicking as MOW)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const sizeHandler = () => {
      // strictly, letting mow styles when its in <= 480px
      let isRealMOW = window.matchMedia("(max-width:480px)").matches;
      if (isRealMOW) {
        setIsMobile(isRealMOW);
      } else {
        setIsMobile(window.innerWidth <= 768);
      }
    };
    window.addEventListener("resize", sizeHandler);
    return () => window.removeEventListener("resize");
  }, []);
  return isMobile;
};
