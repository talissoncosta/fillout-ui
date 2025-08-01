import type { RefObject, DependencyList } from 'react';
import { useEffect, useState } from 'react';

export const useTextOverflow = (ref: RefObject<HTMLElement | null>, deps: DependencyList) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && 'scrollWidth' in el) {
      setIsOverflowing(el.scrollWidth > el.clientWidth);
    }
  }, deps);

  return isOverflowing;
};
