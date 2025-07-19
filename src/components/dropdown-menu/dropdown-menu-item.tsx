import {styled} from "@linaria/react";
import {colorSurfaceStandardHover, colorTextStandard} from "src/theme";

const MenuItem = styled('span')`
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
    background-color: ${colorSurfaceStandardHover};
  }
  
  &:focus-visible {
    outline: none;
  }
  
  &:hover {
    background-color: ${colorSurfaceStandardHover};
  }
}
`


export const DropdownMenuItem = ({ children, onSelect }) => {
  return (
    <MenuItem
      role="menuitem"
      tabIndex={-1}
      onClick={onSelect}
    >
      {children}
    </MenuItem>
  );
}
