import { Root } from "@radix-ui/react-dropdown-menu";
import type { ReactNode} from "react";

export const DropdownMenu = ({ children } : { children: ReactNode }) => (
  <Root>
    {children}
  </Root>
);
