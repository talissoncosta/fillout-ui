import {useContext, type ReactNode} from "react";
import {DropdownMenuContext} from "./dropdown-menu.tsx";

export const DropdownMenuTrigger = ({ children }: { children: ReactNode}) => {
  const { refs, getReferenceProps } = useContext(DropdownMenuContext);

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}
    </div>
  );
}
