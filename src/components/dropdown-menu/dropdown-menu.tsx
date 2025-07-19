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
  type Placement,
  useListNavigation,
} from '@floating-ui/react';
import {
  useEffect,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
  type RefObject,
  useState,
  useRef,
} from 'react';

import { DropdownMenuContext } from './dropdown-menu-context';
import { useOutsideClick } from 'src/hooks/use-click-outside';

interface DropdownMenuProps {
  children: ReactNode;
  isOpen?: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  placement?: Placement;
  triggerRef?: RefObject<HTMLElement | null>;
}

export function DropdownMenu({
  children,
  isOpen = false,
  onOpenChange,
  placement = 'bottom-start',
  triggerRef,
}: DropdownMenuProps) {
  const listRef = useRef<Array<HTMLElement | null>>([]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating({
    placement,
    open: isOpen,
    onOpenChange,
    middleware: [offset(4), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
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

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    dismiss,
    role,
    listNavigation,
  ]);

  useEffect(() => {
    const triggerEl = refs.reference.current;

    if (!triggerEl) return;

    if (!(triggerEl instanceof HTMLElement)) {
      console.warn(
        'DropdownMenu: Reference element is not an HTMLElement. Keyboard events (Enter/Space) may not function as expected.'
      );
      return;
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
    }

    triggerEl.addEventListener('keydown', handleKeyDown);

    return () => {
      triggerEl.removeEventListener('keydown', handleKeyDown);
    };
  }, [refs.reference, onOpenChange, isOpen]);

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
      }}
    >
      {children}
    </DropdownMenuContext.Provider>
  );
}
