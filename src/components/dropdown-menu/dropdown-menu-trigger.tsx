import { useContext, type ReactNode } from 'react';
import { DropdownMenuContext } from './dropdown-menu-context';

export const DropdownMenuTrigger = ({ children }: { children: ReactNode }) => {
  const context = useContext(DropdownMenuContext);

  if (!context) {
    throw new Error('DropdownMenuTrigger must be used within a DropdownMenu component.');
  }

  const { refs, getReferenceProps } = context;

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </div>
  );
};
