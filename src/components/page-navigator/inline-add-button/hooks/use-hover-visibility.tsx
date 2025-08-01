import { useEffect, useRef, useState } from 'react';
  
export const useHoverVisibility = (debounceTime = 150) => {
  const [isVisible, setIsVisible] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const show = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsVisible(true);
    }, debounceTime);
  };

  const hide = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  return { isVisible, show, hide };
};
