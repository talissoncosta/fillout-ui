import React, {
  type ComponentProps,
  type Dispatch,
  forwardRef,
  type MouseEvent,
  type ReactNode,
  type SetStateAction,
  type RefObject,
} from 'react';
import { DropdownMenuTrigger, useDropdownMenu } from 'src/components/dropdown-menu';
import { Tooltip } from 'src/components/tooltip';
import { Button } from 'src/components/button';
import { VerticalDotsIcon } from 'src/components/icons';
import clsx from 'clsx';
import { buttonIconClass, contextButtonHiddenClass, contextButtonVisibleClass } from './styles';
import { colorIconStandardLighter } from 'src/theme';
import { ButtonWrapper } from './elements';
import { useMergeRefs } from '@floating-ui/react';

type NavigationButtonProps = {
  children: ReactNode;
  isActive?: boolean;
  onToggleDropdown: Dispatch<SetStateAction<boolean>>;
  tooltip?: ReactNode;
  triggerRef?: RefObject<HTMLDivElement | null>;
} & ComponentProps<'button'>;

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(
  (
    { children, triggerRef, onClick, isActive, onToggleDropdown, tooltip, onKeyDown, ...props },
    forwardedRef
  ) => {
    const { refs } = useDropdownMenu();

    const handleStopPropagation = (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const handleContextMenu = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault(); // Prevents the browser's default context menu from appearing
      if (isActive) onToggleDropdown((prev: boolean) => !prev);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      onKeyDown?.(e);
      if (e.metaKey && e.key === 'Enter') {
        onToggleDropdown((prev: boolean) => !prev);
      }
    };

    return (
      <Tooltip content={tooltip}>
        <Button
          aria-current={isActive ? 'page' : undefined}
          variant={isActive ? 'active' : 'standard'}
          ref={useMergeRefs([refs.setReference, forwardedRef])}
          onClick={onClick}
          onContextMenu={handleContextMenu}
          onKeyDown={handleKeyDown}
          {...props}
        >
          <ButtonWrapper>
            {children}
            <DropdownMenuTrigger onMouseDown={handleStopPropagation} ref={triggerRef}>
              <VerticalDotsIcon
                className={clsx(buttonIconClass, {
                  [contextButtonHiddenClass]: !isActive,
                  [contextButtonVisibleClass]: isActive,
                })}
                size="small"
                color={colorIconStandardLighter}
              />
            </DropdownMenuTrigger>
          </ButtonWrapper>
        </Button>
      </Tooltip>
    );
  }
);
