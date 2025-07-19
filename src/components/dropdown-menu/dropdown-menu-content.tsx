import { type ReactNode } from 'react';
import { FloatingFocusManager, FloatingPortal, FloatingList } from '@floating-ui/react';
import { useDropdownMenu } from './dropdown-menu-context';
import { styled } from '@linaria/react';
import { colorStrokeStandard, colorSurfaceStandard, shadowStandard } from 'src/theme';

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

  // Commented out animation styles (no TS issue, but for context)
  // transform-origin: var(--origin, top);
  // animation: dropdown-in 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  //
  // @keyframes dropdown-in {
  //   from {
  //     opacity: 0;
  //     transform: scaleY(0);
  //   }
  //
  //   to {
  //     opacity: 1;
  //     transform: scaleY(1);
  //   }
  // }
  //
  // &[data-side="top"] {
  //   --origin: bottom
  // }
  // &[data-side="right"] {
  //   --origin: left
  // }
  // &[data-side="bottom"] {
  //   --origin: top
  // }
  // &[data-side="left"]{
  //   --origin: right
  // }
`;

interface DropdownMenuContentProps {
  children: ReactNode;
}

export const DropdownMenuContent = ({ children }: DropdownMenuContentProps) => {
  const { isOpen, listRef, refs, floatingStyles, context, getFloatingProps } = useDropdownMenu();

  if (!isOpen) return null;

  return (
    <FloatingList elementsRef={listRef}>
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false}>
          <MenuContent ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
            {children}
          </MenuContent>
        </FloatingFocusManager>
      </FloatingPortal>
    </FloatingList>
  );
};
