import { useEffect } from "react";
import router from "next/router";

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [router.pathname]);

  return children || null;
};

export default ScrollToTop;
