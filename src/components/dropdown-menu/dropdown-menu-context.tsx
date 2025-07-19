import { createContext, type Dispatch, type SetStateAction } from 'react';
import type { ReferenceType, FloatingContext, UseFloatingReturn } from '@floating-ui/react';
import type { useInteractions } from '@floating-ui/react';

interface DropdownMenuContextType {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  refs: UseFloatingReturn<ReferenceType>['refs'];
  floatingStyles: UseFloatingReturn<ReferenceType>['floatingStyles'];
  context: FloatingContext;
  getReferenceProps: ReturnType<typeof useInteractions>['getReferenceProps'];
  getFloatingProps: ReturnType<typeof useInteractions>['getFloatingProps'];
}

export const DropdownMenuContext = createContext<DropdownMenuContextType | null>(null);
