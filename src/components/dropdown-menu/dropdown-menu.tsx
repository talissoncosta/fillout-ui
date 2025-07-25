import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  autoUpdate,
  useListNavigation,
  type Placement as PlacementType,
} from '@floating-ui/react';
import { type ReactNode, type Dispatch, type SetStateAction, useState, useRef } from 'react';

import { DropdownMenuContext } from './dropdown-menu-context';
import { useOutsideClick } from 'src/hooks/use-click-outside';

type Placement = Extract<
  PlacementType,
  'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end'
>;

interface DropdownMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  placement?: Placement;
}

export function DropdownMenu({
  children,
  isOpen = false,
  onOpenChange,
  placement = 'bottom-start',
}: DropdownMenuProps) {
  const listRef = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const {
    refs,
    floatingStyles,
    context,
    placement: currentPlacement,
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange,
    middleware: [offset(9), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
    transform: false,
  });

  useOutsideClick(
    refs.floating,
    () => {
      if (isOpen) {
        onOpenChange(false);
      }
    },
    refs.reference ? [refs.reference] : []
  );

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: false,
    escapeKey: true,
  });
  const role = useRole(context, { role: 'menu' });
  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const { getReferenceProps, getItemProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
  ]);

  return (
    <DropdownMenuContext.Provider
      value={{
        isOpen,
        onOpenChange,
        refs,
        floatingStyles,
        context,
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        listRef,
        activeIndex,
        currentPlacement,
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
