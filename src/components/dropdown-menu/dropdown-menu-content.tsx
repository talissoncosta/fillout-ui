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
  z-index: 10;

  & > :last-child {
    margin-bottom: 6px;
  }

  &:focus-visible {
    outline: none;
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

  &[data-placement='top'] {
    --origin: bottom;
  }
  &[data-placement='bottom'] {
    --origin: top;
  }
`;

interface DropdownMenuContentProps {
  children: ReactNode;
}

export const DropdownMenuContent = ({ children }: DropdownMenuContentProps) => {
  const { currentPlacement, isOpen, listRef, refs, floatingStyles, context, getFloatingProps } =
    useDropdownMenu();
  const side = currentPlacement?.split('-')[0] ?? '';

  if (!isOpen) return null;

  return (
    <FloatingList elementsRef={listRef}>
      <FloatingPortal>
        <FloatingFocusManager context={context} modal={false}>
          <MenuContent
            data-placement={side}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {children}
          </MenuContent>
        </FloatingFocusManager>
      </FloatingPortal>
    </FloatingList>
  );
};
