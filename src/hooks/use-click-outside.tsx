import { useEffect, type RefObject } from 'react';
import type { ReferenceType } from '@floating-ui/react';

type Handler = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: RefObject<HTMLElement | null>,
  handler: Handler,
  ignoredElementsOrRefs?: RefObject<ReferenceType | null>[]
): void => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;

      if (ref.current && 'contains' in ref.current && ref.current.contains(target)) {
        return;
      }

      if (ignoredElementsOrRefs) {
        for (const item of ignoredElementsOrRefs) {
          const element = item && 'current' in item ? item.current : item;
          if (element && 'contains' in element && element.contains(target)) {
            return;
          }
        }
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, ignoredElementsOrRefs]);
};
