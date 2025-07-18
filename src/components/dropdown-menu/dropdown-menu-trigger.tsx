import { Trigger } from "@radix-ui/react-dropdown-menu";
import type { PropsWithChildren } from "react";

export const DropdownMenuTrigger = ({ children }) => (
  <Trigger asChild>
    {children}
  </Trigger>
)

