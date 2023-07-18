import {useState, useEffect, useCallback} from "react";

const useScrollDireccion = () => {
  const [y, setY] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDirection("up");
      } else if (y < window.scrollY) {
        setScrollDirection("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return scrollDirection;
}

export default useScrollDireccion;