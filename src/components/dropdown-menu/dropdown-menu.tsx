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
} from '@floating-ui/react';
import {createContext, useEffect } from 'react';

export const DropdownMenuContext = createContext(null);

export function DropdownMenu({ children, open = true, onOpenChange, placement = 'bottom-start' }) {
  const {
    refs,
    floatingStyles,
    context
  } = useFloating({
    placement,
    open,
    onOpenChange,
    middleware: [
      offset(4),
      flip(),
      shift({ padding: 8 }),
      ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePress: false
  });
  const role = useRole(context, { role: 'menu' });
  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  useEffect(() => {
    const triggerEl = refs.reference.current;
    if (!triggerEl) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenChange(prev => !prev); // toggle on Enter/Space
      }
    }

    triggerEl.addEventListener('keydown', handleKeyDown);

    return () => {
      triggerEl.removeEventListener('keydown', handleKeyDown);
    };
  }, [refs.reference, onOpenChange]);

  useEffect(() => {
    function handleClickOutside(e) {
      const target = e.target;

      const isInsideFloating = refs.floating.current?.contains(target);

      if (!isInsideFloating) {
        onOpenChange(false);
      }
    }

    if (open) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, refs, onOpenChange]);

  return (
    <DropdownMenuContext.Provider value={{ open, onOpenChange, refs, floatingStyles, context, getReferenceProps, getFloatingProps }}>
      {children}
    </DropdownMenuContext.Provider>
  );
}
