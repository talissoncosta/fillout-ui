import { type ReactNode, type KeyboardEvent } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';

export const DropdownMenuTrigger = ({ children }: { children: ReactNode }) => {
  const { refs, getReferenceProps, onOpenChange, isOpen } = useDropdownMenu();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenChange(!isOpen);
    }
  };

  return (
    <div ref={refs.setReference} {...getReferenceProps()} onKeyDown={handleKeyDown}>
      {children}
    </div>
  );
};
