import { Trigger } from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export const DropdownMenuTrigger = ({ children }: { children: ReactNode }) => (
  <Trigger asChild>
    {children}
  </Trigger>
)

