import { Root } from "@radix-ui/react-dropdown-menu";
import type { PropsWithChildren } from "react";

export const DropdownMenu = ({ children }: PropsWithChildren<typeof Root>) => (
  <Root>
    {children}
  </Root>
);
