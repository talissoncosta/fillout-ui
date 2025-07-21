import { type KeyboardEvent, type ComponentProps, forwardRef } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';
import { Slot } from '@radix-ui/react-slot';
import { useMergeRefs } from '@floating-ui/react';

type DropdownMenuTriggerProps = ComponentProps<'div'> & {
  asChild?: boolean;
};

export const DropdownMenuTrigger = forwardRef<HTMLDivElement, DropdownMenuTriggerProps>(
  ({ children, asChild, ...props }: DropdownMenuTriggerProps, forwardRef) => {
    const { refs, getReferenceProps, onOpenChange, isOpen } = useDropdownMenu();

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onOpenChange(!isOpen);
      }
    };

    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        ref={useMergeRefs(asChild ? [refs.setReference, forwardRef] : [forwardRef])}
        {...getReferenceProps()}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
