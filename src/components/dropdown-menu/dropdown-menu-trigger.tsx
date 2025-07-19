import { type ReactNode } from 'react';
import { useDropdownMenu } from './dropdown-menu-context';

export const DropdownMenuTrigger = ({ children }: { children: ReactNode }) => {
  const { refs, getReferenceProps } = useDropdownMenu();

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </div>
  );
};
