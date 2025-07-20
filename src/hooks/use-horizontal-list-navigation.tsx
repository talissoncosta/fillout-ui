import { useEffect, useState } from 'react';
import { type RefObject } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent } from 'react';

type UseHorizontalListNavigationOptions = {
  refs: RefObject<HTMLElement | null>[];
  loop?: boolean;
  initialActiveIndex?: number;
  onSelect?: (index: number) => void;
};

interface UseHorizontalListNavigationReturn {
  getItemProps: (index: number) => { onKeyDown: (e: React.KeyboardEvent) => void };
  activeIndex: number;
}

export const useHorizontalListNavigation = ({
  refs,
  loop = true,
  initialActiveIndex = 0,
  onSelect,
}: UseHorizontalListNavigationOptions): UseHorizontalListNavigationReturn => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  useEffect(() => {
    if (refs.length === 0) {
      setActiveIndex(-1);
    } else if (activeIndex >= refs.length) {
      setActiveIndex(0);
    } else if (activeIndex < 0) {
      setActiveIndex(refs.length - 1);
    }
  }, [activeIndex, refs.length]);

  const handleKeyDown = (e: ReactKeyboardEvent, index: number) => {
    if (!refs[index]?.current) return;

    if (e.metaKey && e.key == 'Enter') {
      console.log('sim');
    }

    let newIndex = index;

    switch (e.key) {
      case 'ArrowRight':
        newIndex = loop ? (index + 1) % refs.length : Math.min(index + 1, refs.length - 1);
        break;
      case 'ArrowLeft':
        newIndex = loop ? (index - 1 + refs.length) % refs.length : Math.max(index - 1, 0);
        break;
      case 'Enter':
      case ' ':
        onSelect?.(index);
        e.preventDefault();
        break;
      default:
        return;
    }

    if (newIndex !== index) {
      e.preventDefault();
      refs[newIndex].current?.focus();
      setActiveIndex(newIndex);
    }
  };

  const getItemProps = (index: number) => ({
    onKeyDown: (e: ReactKeyboardEvent) => handleKeyDown(e, index),
  });

  return { getItemProps, activeIndex } as UseHorizontalListNavigationReturn;
};
