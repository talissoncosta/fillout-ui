import { Item } from "@radix-ui/react-dropdown-menu";
import { styled } from "@linaria/react";
import {colorSurfaceStandardActiveHover, colorTextStandard} from "src/theme";
import type { ComponentProps } from "react";

const MenuItem = styled(Item)`
  display: flex;
  gap: 6px;
  line-height: 16px;
  font-size: 14px;
  align-items: center;
  letter-spacing: -0.015em;
  color: ${colorTextStandard};
  cursor: default;
  user-select: none;
  width: 100%;
  padding: 8px 12px;
  
  &[data-highlighted] {
    background-color: ${colorSurfaceStandardActiveHover};
  }
  
  &:focus-visible {
    outline: none;
  }
  
  &:hover {
    background-color: ${colorSurfaceStandardActiveHover};
  }
}
`
export const DropdownMenuItem = ({ children, ...props }: ComponentProps<typeof Item>) =>  (
  <MenuItem {...props}>
    {children}
  </MenuItem>
)
