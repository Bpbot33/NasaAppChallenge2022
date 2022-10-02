import { useEffect, useState } from "react";

const getViewportSize = () => {
  if (!window) return null;

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const useViewport = () => {
  const [windowSize, setWindowSize] = useState(getViewportSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getViewportSize());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

export default useViewport;
