import { createContext, type MutableRefObject, useContext } from 'react';
import type { ReferenceType, FloatingContext, UseFloatingReturn } from '@floating-ui/react';
import type { useInteractions } from '@floating-ui/react';

interface DropdownMenuContextType {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
  refs: UseFloatingReturn<ReferenceType>['refs'];
  context: FloatingContext;
  floatingStyles: UseFloatingReturn<ReferenceType>['floatingStyles'];
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
  getItemProps: ReturnType<typeof useInteractions>['getItemProps'];
  listRef: MutableRefObject<Array<HTMLElement | null>>;
  activeIndex: number | null;
}

export const DropdownMenuContext = createContext<DropdownMenuContextType | null>(null);

export const useDropdownMenu = (): DropdownMenuContextType => {
  const context = useContext(DropdownMenuContext);
  if (!context) {
    throw new Error('useDropdownMenu must be used within a <DropdownMenu> provider');
  }
  return context;
};
