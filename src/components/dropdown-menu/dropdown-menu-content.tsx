import {useContext} from "react";
import { FloatingFocusManager, FloatingPortal } from "@floating-ui/react";
import {DropdownMenuContext} from "./dropdown-menu.tsx";
import {styled} from "@linaria/react";
import {colorStrokeStandard, colorSurfaceStandard, shadowStandard} from "src/theme";


const MenuContent = styled('div')`
  display: flex;
  flex-direction: column;
  overflow: auto;
  background: ${colorSurfaceStandard};
  border: 0.5px solid ${colorStrokeStandard};
  box-shadow: ${shadowStandard};
  border-radius: 12px;

  
  & > :last-child {
    margin-bottom: 6px;
  }
  
  &:focus-visible {
    outline: none;
  }
  //transform-origin: var(--origin, top);
  //animation: dropdown-in 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  //
  //@keyframes dropdown-in {
  //  from {
  //    opacity: 0;
  //    transform: scaleY(0);
  //  }
  //
  //  to {
  //    opacity: 1;
  //    transform: scaleY(1);
  //  }
  //}
  
  //&[data-side="top"] {
  //  --origin: bottom
  //}
  //&[data-side="right"] {
  //  --origin: left
  //}
  //&[data-side="bottom"] {
  //  --origin: top
  //}
  //&[data-side="left"]{
  //  --origin: right
  //}
`

export const  DropdownMenuContent = ({ children }) => {
  const { open, refs, floatingStyles, context, getFloatingProps } = useContext(DropdownMenuContext);

  if (!open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={context} modal={false}>
        <MenuContent
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {children}
        </MenuContent>
      </FloatingFocusManager>
    </FloatingPortal>
  );
}
