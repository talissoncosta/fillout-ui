import { type KeyboardEvent, type ComponentProps } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';
import { Slot } from '@radix-ui/react-slot';

type DropdownMenuTriggerProps = ComponentProps<'div'> & {
  asChild?: boolean;
};

export const DropdownMenuTrigger = ({ children, asChild, ...props }: DropdownMenuTriggerProps) => {
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
      ref={asChild ? refs.setReference : undefined}
      {...getReferenceProps()}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-haspopup="menu"
      {...props}
    >
      {children}
    </Comp>
  );
};
