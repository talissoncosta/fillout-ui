import { Portal, Content } from "@radix-ui/react-dropdown-menu";
import { styled } from "@linaria/react";
import { colorStrokeStandard, colorSurfaceStandardActive, shadowStandard } from "src/theme";
import type {ComponentProps} from "react";

const MenuContent = styled(Content)`
  display: flex;
  flex-direction: column;
  width: 240px;
  overflow: auto;

  background: ${colorSurfaceStandardActive};
  border: 0.5px solid ${colorStrokeStandard};
  box-shadow: ${shadowStandard};
  border-radius: 12px;

  min-width: 220px;
  
  & > :last-child {
    margin-bottom: 6px;
  }

  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side="top"] {
    animation-name: slideDownAndFade;
  }
  &[data-side="right"] {
    animation-name: slideLeftAndFade;
  }
  &[data-side="bottom"] {
    animation-name: slideUpAndFade;
  }
  &[data-side="left"]{
    animation-name: slideRightAndFade;
  }

  @keyframes slideUpAndFade {
    from {
      opacity: 0;
      transform: translateY(2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideRightAndFade {
    from {
      opacity: 0;
      transform: translateX(-2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideDownAndFade {
    from {
      opacity: 0;
      transform: translateY(-2px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideLeftAndFade {
    from {
      opacity: 0;
      transform: translateX(2px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
type DropdownMenuContentProps = ComponentProps<typeof Content>
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
