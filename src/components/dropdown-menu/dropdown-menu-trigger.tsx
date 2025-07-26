import {
  forwardRef,
  type KeyboardEvent,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';
import { useDropdownMenu } from './dropdown-menu-context';
import { Slot } from '@radix-ui/react-slot';
import { useMergeRefs } from '@floating-ui/react';

type DropdownMenuTriggerProps = ComponentPropsWithoutRef<'button'> & {
  interactive?: boolean;
  children: ReactNode;
};

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, interactive = false, ...props }, ref) => {
    const { refs, getReferenceProps, onOpenChange, isOpen } = useDropdownMenu();

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
    };

    const handleClick = () => onOpenChange(!isOpen);

    const interactionHandlers = interactive
      ? {
          onKeyDown: handleKeyDown,
          onClick: handleClick,
        }
      : {
          onClick: (e: React.MouseEvent) => e.preventDefault(),
        };

    return (
      <Slot
        ref={useMergeRefs([refs.setReference, ref])}
        {...getReferenceProps()}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        {...interactionHandlers}
        {...props}
      >
        {children}
      </Slot>
    );
  }
);
