import { type KeyboardEvent, type ComponentProps } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';

export const DropdownMenuTrigger = ({ children, ...props }: ComponentProps<'div'>) => {
  const { refs, getReferenceProps, onOpenChange, isOpen } = useDropdownMenu();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenChange(!isOpen);
    }
  };

  return (
    <div ref={refs.setReference} {...getReferenceProps()} onKeyDown={handleKeyDown} {...props}>
      {children}
    </div>
  );
};
