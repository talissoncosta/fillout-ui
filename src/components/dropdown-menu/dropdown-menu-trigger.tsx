import { type KeyboardEvent, type ComponentProps, forwardRef } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';
import { Slot } from '@radix-ui/react-slot';
import { useMergeRefs } from '@floating-ui/react';

type DropdownMenuTriggerProps = ComponentProps<'button'> & {
  shouldHandleInteractions?: boolean;
};

export const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
  ({ children, shouldHandleInteractions, ...props }: DropdownMenuTriggerProps, forwardRef) => {
    const { refs, getReferenceProps, onOpenChange, isOpen } = useDropdownMenu();

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
    };

    const handleClick = () => onOpenChange(!isOpen);

    const interactionProps = {
      onKeyDown: handleKeyDown,
      onClick: handleClick,
    };

    return (
      <Slot
        ref={useMergeRefs([refs.setReference, forwardRef])}
        {...getReferenceProps()}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        {...(shouldHandleInteractions
          ? interactionProps
          : {
              onClick: (e) => {
                e.preventDefault();
              },
            })}
        {...props}
      >
        {children}
      </Slot>
    );
  }
);
