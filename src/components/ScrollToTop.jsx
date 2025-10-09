import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cette fonction fait défiler la fenêtre vers le haut à chaque changement de route
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  return null; // Ce composant n'a pas de rendu visuel
};

export default ScrollToTop;
