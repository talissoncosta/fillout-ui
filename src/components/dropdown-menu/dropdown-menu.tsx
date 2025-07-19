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
  autoPlacement,
  type Placement as PlacementType,
  type Alignment,
} from '@floating-ui/react';
import {
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type RefObject,
  useState,
  useRef,
} from 'react';

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
  alignment?: Alignment;
  triggerRef?: RefObject<HTMLElement | null>;
}

export function DropdownMenu({
  children,
  isOpen = false,
  onOpenChange,
  placement = 'bottom-start',
  alignment = 'start',
  triggerRef,
}: DropdownMenuProps) {
  const listRef = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const {
    refs,
    floatingStyles,
    context,
    placement: currentPlacement,
    ...rest
  } = useFloating({
    placement,
    open: isOpen,
    onOpenChange,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }),
      autoPlacement({
        alignment,
        autoAlignment: false,
        allowedPlacements: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
      }),
    ],
    whileElementsMounted: autoUpdate,
    transform: false,
  });
  const getIgnoredRefs = (): RefObject<HTMLElement | null>[] => {
    if (triggerRef) return [triggerRef];
    if (refs.reference) return [refs.reference as RefObject<HTMLElement | null>];
    return [];
  };

  useOutsideClick(
    refs.floating,
    () => {
      if (isOpen) {
        onOpenChange(false);
      }
    },
    getIgnoredRefs()
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
        triggerRef,
        currentPlacement,
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
