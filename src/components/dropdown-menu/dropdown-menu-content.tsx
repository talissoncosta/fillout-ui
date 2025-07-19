import { Portal, Content } from "@radix-ui/react-dropdown-menu";
import { styled } from "@linaria/react";
import {colorStrokeStandard, colorSurfaceStandard, shadowStandard} from "src/theme";
import type {ComponentProps} from "react";

const MenuContent = styled(Content)`
  display: flex;
  flex-direction: column;
  width: 240px;
  overflow: auto;
  background: ${colorSurfaceStandard};
  border: 0.5px solid ${colorStrokeStandard};
  box-shadow: ${shadowStandard};
  border-radius: 12px;

  min-width: 220px;
  
  & > :last-child {
    margin-bottom: 6px;
  }
  transform-origin: var(--origin, top);
  animation: dropdown-in 0.15s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes dropdown-in {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    to {
      opacity: 1;
      transform: scaleY(1);
    }
  }
  
  &[data-side="top"] {
    --origin: bottom
  }
  &[data-side="right"] {
    --origin: left
  }
  &[data-side="bottom"] {
    --origin: top
  }
  &[data-side="left"]{
    --origin: right
  }
`
type DropdownMenuContentProps = Omit<ComponentProps<typeof Content>, 'side'> & { side: 'bottom' | 'top' }
export const DropdownMenuContent = ({ children, align, side, ...props }: DropdownMenuContentProps) => (
  <Portal>
    <MenuContent
      align={align || 'start'}
      side={side || 'bottom'}
      sideOffset={5}
      loop
      {...props}
    >
      {children}
    </MenuContent>
  </Portal>
)
